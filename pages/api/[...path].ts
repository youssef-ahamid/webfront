import { prisma } from "@/db";
import { ORM } from "@/utils/ORM";
import { z } from "zod";

export const orm = new ORM({
  provider: () => ({
    count: (model, query) => prisma[model].count(query),
    getOne: (model, query) => prisma[model].findFirst(query),
    getMany: (model, query) => prisma[model].findMany(query),
    createOne: (model, data) => prisma[model].create({ data }),
    updateOne: (model, where, data) => prisma[model].update({ ...where, data }),
    deleteOne: (model, where) => prisma[model].delete(where),
  }),
  introspection: true,
});

orm.createResource("contentEdit", {
  userId: z.string(),
  pageId: z.string(),
  content: z.record(z.any()),
});

orm.createResource("page", {
  title: z.string(),
  slug: z.string(),
  content: z.record(z.any()),
});

orm.createResource("user", {
  email: z.string().email(),
  name: z.string(),
});

orm.router.post("/api/contentEdit", async (req, res) => {
  const { userId, pageId, content } = req.body;
  const page = await prisma.page.findFirst({ where: { id: pageId } });
  if (!page) return res.status(400).json({ message: "Page not found" });
  const previous = Object.keys(content)
    .filter((key) => key in page.content)
    .reduce((obj, key) => ({ ...obj, [key]: page.content[key] }), {});

  try {
    const edit = await prisma.contentEdit.create({
      data: {
        userId,
        pageId,
        content,
        previous,
      },
    });

    await prisma.page.update({
      where: { id: pageId },
      data: { content: { ...page.content, ...content } },
    });

    res.status(200).json(edit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default orm.expose();
