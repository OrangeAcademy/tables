import {DefaultRootState} from "react-redux";
import {EventState} from "./Event/types";
import {ReportState} from "./Report/types";
import {NewMeeting} from "./NewMeeting/newMeeting";
import { IRoomState } from "./StateRoom/stateRoomSlice";

export interface RootState extends DefaultRootState {
    event: EventState;
    report: ReportState;
    newMeeting:NewMeeting;
    roomState: IRoomState
}