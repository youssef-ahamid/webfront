"use client";
import { Button } from "@/components/interactive";
import front from "@/utils/front";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function ContactUsForm(form: typeof front.Form.Type) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const t = useTranslation();
  return (
    <form
      action={async (formData: FormData) =>
        startTransition(async () => {
          try {
            await front.FormSubmission.create({
              formId: form.id,
              data: form.fields.map(({ id: fieldId }) => ({
                fieldId,
                response: formData.get(fieldId) as string,
              })),
            });
          } catch {}
          router.push("/contact/thank-you");
        })
      }
      className="w-full flex flex-col space-y-8 items-center md:px-8"
    >
      <div className="isolate -space-y-px rounded-md shadow-sm w-full">
        {form.fields.map(Field)}
      </div>

      <Button
        type="submit"
        isLoading={isPending}
        variant="shadow"
        className="ring-2 ring-background"
      >
        {t("submit")}
      </Button>
    </form>
  );
}

export function JobApplicationForm(job: typeof front.JobPosting.Type) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const t = useTranslation();
  return (
    <form
      id="apply"
      action={async (formData: FormData) =>
        startTransition(async () => {
          try {
            await front.applyToJob(formData, job.id);
          } catch {}
          router.push("/careers/thank-you");
        })
      }
      className="w-full flex flex-col space-y-8 items-center md:px-8"
    >
      <div className="isolate -space-y-px rounded-md shadow-sm w-full max-w-2xl mx-auto">
        <Field id="name" title="Name" type="text" required />
        <Field id="email" title="Email" type="email" required />
        <Field id="phone" title="Phone" type="tel" required />
        <Field
          id="linkedin"
          title="Linkedin/Social Profile"
          type="text"
          required
        />
        <Field id="resume" title="Resume" type="file" required />
        <Field id="coverLetter" title="Cover Letter" type="textarea" required />
      </div>

      <Button
        type="submit"
        isLoading={isPending}
        variant="shadow"
        className="ring-2 ring-background"
      >
        {t("submit")}
      </Button>
    </form>
  );
}

import clsx from "clsx";
import { toast } from "sonner";
import { useTranslation } from "@/utils/useTranslation";

export default function Field({
  id,
  required,
  type,
}: (typeof front.Form.Type)["fields"][number]) {
  const t = useTranslation();
  const defultInputClasses =
    "appearance-none outline-none block w-full rounded-md border-0 py-2.5 text-default ring-0 focus:ring-0 sm:text-base sm:leading-6 bg-transparent w-full";
  return (
    <div className="relative px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-default/80 focus-within:z-10 focus-within:ring-2 focus-within:ring-default bg-secondary w-full max-w-3xl">
      <label
        htmlFor={id}
        className="block text-lg font-semibold leading-6 text-default"
      >
        {t(id)}
      </label>
      {type === "textarea" ? (
        <textarea
          name={id}
          id={id}
          rows={5}
          required={required}
          className={clsx(defultInputClasses, "resize-none")}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          required={required}
          className={defultInputClasses}
        />
      )}
    </div>
  );
}
