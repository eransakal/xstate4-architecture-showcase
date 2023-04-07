import { useContext, useMemo } from 'react';
import { PollsMachineEventsTypes } from './types';
import { PollsContext } from './polls-provider';

export const usePollsService = () => {
  const { pollsMachineService } = useContext(PollsContext);

  const actions = useMemo(() => {
    return {
      startAPoll: (pollType: string, isPrivate: boolean) => {
        pollsMachineService.send({
          type: PollsMachineEventsTypes.CreateAPoll,
          pollType,
          isPrivate,
        });
      },
      endPoll: () => {
        pollsMachineService.send({
          type: PollsMachineEventsTypes.EndPoll,
        });
      },
      answerPoll: (answerId: string) => {
        pollsMachineService.send({
          type: PollsMachineEventsTypes.AnswerPoll,
          answerId,
        });
      },
    };
  }, [pollsMachineService]);

  return {
    pollsMachineService,
    actions,
  };
};
