import {DefaultRootState} from "react-redux";
import {EventState} from "./Event/types";
import {ReportState} from "./Report/types";


export interface RootState extends DefaultRootState {
    event: EventState;
    report: ReportState;

}