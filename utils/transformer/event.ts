import { EventParticipant } from "interfaces/event";

export function groupParticipantByEventSlug(
  response: Array<EventParticipant>
): Record<string, EventParticipant> {
  const output: Record<string, EventParticipant> = {};

  response.forEach((entry) => {
    output[entry.mainevent.slug] = entry;
  });

  return output;
}
