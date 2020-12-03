import { PreeventRegistration } from "interfaces/preevent";

export function groupRegistrationByPreeventSlug(
  response: Array<PreeventRegistration>
): Record<string, PreeventRegistration> {
  const output: Record<string, PreeventRegistration> = {};

  response.forEach((entry) => {
    output[entry.preevent.slug] = entry;
  });

  return output;
}
