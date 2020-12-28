import { EventRegistration } from "interfaces/event";

export function groupRegistrationByEventSlug(
  response: Array<EventRegistration>
): Record<string, EventRegistration> {
  const output: Record<string, EventRegistration> = {};

  response.forEach((entry) => {
    output[entry.mainevent.slug] = entry;
  });

  return output;
}
