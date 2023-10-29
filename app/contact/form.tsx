"use client";
import { Button } from "@/components/interactive";
import front from "@/utils/front";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function ContactUsForm(form: typeof front.Form.Type) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <form
      action={async (formData: FormData) =>
        startTransition(async () => {
          const response = await front.FormSubmission.create({
            formId: form.id,
            data: form.fields.map(({ id: fieldId }) => ({
              fieldId,
              response: formData.get(fieldId) as string,
            })),
          });
          console.log(response);
          router.push("/contact/thank-you");
        })
      }
    >
      {form.fields.map(({ id, title, type, required }) => (
        <label key={id} htmlFor={id}>
          <p>{title}</p>
          <input key={id} id={id} name={id} type={type} required={required} />
        </label>
      ))}

      <Button type="submit" isLoading={isPending}>
        submit
      </Button>
    </form>
  );
}
