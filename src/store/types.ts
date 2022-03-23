import {DefaultRootState} from "react-redux";
import {EventState} from "./Event/types";
import {ReportState} from "./Report/types";
import {NewMeeting} from "./NewMeeting/newMeeting";
import { IRoomState } from "./StateRoom/stateRoomSlice";
import {UserState} from "./User/types";
import { initialSliceState as selectedEventState} from "./SelectedEvent/selectedEventSlice";

export interface RootState extends DefaultRootState {
    event: EventState;
    report: ReportState;
    newMeeting:NewMeeting;
    roomState: IRoomState;
    user: UserState;
    selectedEvent: selectedEventState;
}
