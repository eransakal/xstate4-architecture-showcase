import { UserPollsMachineContext } from "./context";

export enum UserPollsMachineEventsTypes {
  ExternalInfoUpdated = 'ExternalInfoUpdated',
  ExternalInfoLoaded = 'ExternalInfoLoaded',
  UpdateUserAnswer = 'UpdateUserAnswer',
  UserAnswerUpdated = 'UserAnswerUpdated',
  StartPollUpdated = "StartPollUpdated",
  UpdateStartPoll = "UpdateStartPoll"
}

// TODO add reference to example
// type invokeEvents = unknown;

export type UserPollsMachineEvents = 
  //  | invokeEvents
   {
    type: UserPollsMachineEventsTypes.ExternalInfoLoaded;      
    loaded: boolean
  }
  | {
      type: UserPollsMachineEventsTypes.ExternalInfoUpdated;
      externalInfo: Partial<UserPollsMachineContext['externalInfo']>;
    }
    | {
      type: UserPollsMachineEventsTypes.UpdateUserAnswer;
      answer: string;
    } |
    {
      type: UserPollsMachineEventsTypes.UserAnswerUpdated; 
      answer: string;     
    } 
    | {
      type: UserPollsMachineEventsTypes.StartPollUpdated;       
    } 
    | {
      type: UserPollsMachineEventsTypes.UpdateStartPoll; 
    } 
    

