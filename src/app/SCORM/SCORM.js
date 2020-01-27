import { pipwerks } from './scorm_api_wrapper.js';
var scorm = pipwerks.SCORM;
let StartTime;
export class SCORM {

    Init(sVersion) {
        scorm.version = sVersion;
        this.StartTime = new Date();
        console.log("Initializing SCORM.");
        var callSucceeded = scorm.init();
        if (!callSucceeded) {
            //console.log("M Get API");
            scorm.API.handle = scorm.API.get();
            scorm.connection.isActive = true;
        }
        console.log("Initializing succeeded? " + callSucceeded);
    }

    Set(param, value) {
        //console.log("Sending: '" +value +"'");
        var callSucceeded = scorm.set(param, value);
        //console.log("Call succeeded? " +callSucceeded);
    }
    Get(param) {
        var value = scorm.get(param);
        //console.log("Received: '" +value +"'");
        return value;
    }
    Complete(value) {
        var success;
        //console.log("Setting course status .");
        switch (scorm.version) {
            case "1.2": success = scorm.set("cmi.core.lesson_status", value); break;
            case "2004": success = scorm.set("cmi.completion_status", value); break;
        }
        console.log("The course is completed = " + success + ". " + scorm.version + " - " + value);
        //alert("The course is completed = " + success + ". SCORM version :" + scorm.version);
    }
    SessionTime() {
        var success, timeSpan;
        //console.log("Setting course session time.");
        timeSpan = this.GetSessionTime(this.StartTime, new Date());
        switch (scorm.version) {
            case "1.2": success = scorm.set("cmi.core.session_time", timeSpan); break;
            case "2004": success = scorm.set("cmi.session_time", timeSpan); break;
        }
        //console.log("Call succeeded? " +success);
    }
    Score(Raw) {
        var success;
        console.log("Setting course score ", Raw);
        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.core.score.min", "0");
                success = scorm.set("cmi.core.score.max", "100");
                success = scorm.set("cmi.core.score.raw", Raw.toString());
                break;
            case "2004":
                success = scorm.set("cmi.score.scaled", (Raw / 100).toString());
                success = scorm.set("cmi.score.min", "0");
                success = scorm.set("cmi.score.max", "100");
                success = scorm.set("cmi.score.raw", Raw.toString());
                break;
        }
        //console.log("Call succeeded? " +success);
    }
    SuccessStatus(Raw, Min) {
        var success;
        //console.log("Setting course Success Status.");

        switch (scorm.version) {
            case "1.2":
                break;
            case "2004":
                if (Raw >= Min) success = scorm.set("cmi.success_status", "passed");
                else success = scorm.set("cmi.success_status", "failed");
                break;
        }
        //console.log("Call succeeded? " +success);
    }
    Location(sLocation) {
        var success;
        //console.log("Setting course location.");
        //alert(scorm.version , sLocation);
        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.core.lesson_location", sLocation);
                break;
            case "2004":
                success = scorm.set("cmi.location", sLocation);
                break;
        }
        //console.log("Call succeeded? " +success);
    }
    BookVal(bookmark_val) {
        var success;
        //console.log("Setting course location.");

        switch (scorm.version) {
            case "1.2":
                success = scorm.set("objectives._count", bookmark_val);
                break;
            case "2004":
                success = scorm.set("objectives._count", bookmark_val);
                break;
        }
        //console.log("Call succeeded? " +success);
    }
    setBookmark(sLocation) {
        var success = "";
        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.core.lesson_location", sLocation);
                break;
            case "2004":
                success = scorm.set("cmi.location", sLocation);
                break;
        }
        return success;
    }
    getBookmark() {
        switch (scorm.version) {
            case "1.2":
                return scorm.get("cmi.core.lesson_location");
            case "2004":
                return scorm.get("cmi.location");
        }
    }

    SuspendData(lastCount) {
        var success;
        //console.log("Setting course Suspend Data.");

        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.suspend_data", lastCount);
                break;
            case "2004":
                success = scorm.set("cmi.suspend_data", lastCount);
                break;
        }
        //console.log("Call succeeded? " +success);
    }
    GetSuspendData(sData) {
        var success;
        switch (scorm.version) {
            case "1.2":
                success = scorm.get("cmi.suspend_data");
                break;
            case "2004":
                success = scorm.get("cmi.suspend_data");
                break;
        }

        return success;
    }
    Resume() {
        /*var sMode = scorm.get("cmi.mode");
    
        var sLocation = '';
        if (sMode == "browse" || sMode == "review" || sMode == "teacher" || sMode == "instructor" || sMode == "author") {
            // code for teacher 
        }
        else {
            // code for student
        }*/
        switch (scorm.version) {
            case "1.2":
                sLocation = scorm.get("cmi.core.lesson_location");
                lastCount = scorm.get("cmi.suspend_data");
                raw_pre = scorm.get("cmi.core.score.raw");
                bookmark_val = scorm.get("objectives._count");

                break;
            case "2004":
                sLocation = scorm.get("cmi.location");
                lastCount = scorm.get("cmi.suspend_data");
                raw_pre = scorm.get("cmi.score.raw");
                bookmark_val = scorm.get("objectives._count");
                break;
        }
        return sLocation;
    }
    End() {
        //console.log("Terminating connection.");
        var callSucceeded = scorm.quit();
        //console.log("Call succeeded? " +callSucceeded);
    }
    Save() {
        //console.log("Commit.");
        var callSucceeded = scorm.save();
        console.log("Call succeeded? " + callSucceeded);
    }

    GetSessionTime(StartTime, EndTime) {
        var timeSpan, oNowTime, oStartTime;
        oStartTime = StartTime;
        if (oStartTime != null) {
            oNowTime = EndTime;

            var StartH = oStartTime.getHours();
            var StartM = oStartTime.getMinutes();
            var StartS = oStartTime.getSeconds();

            var NowH = oNowTime.getHours();
            var NowM = oNowTime.getMinutes();
            var NowS = oNowTime.getSeconds();

            var ElapsedH = NowH - StartH;
            var ElapsedM = NowM - StartM;
            var ElapsedS = NowS - StartS;

            if (ElapsedH < 0) ElapsedH = "0";
            if (ElapsedM < 0) ElapsedM = "0";
            if (ElapsedS < 0) ElapsedS = "0";

            if (ElapsedH < 10) ElapsedH = "0" + ElapsedH;
            if (ElapsedM < 10) ElapsedM = "0" + ElapsedM;
            if (ElapsedS < 10) ElapsedS = "0" + ElapsedS;

            switch (scorm.version) {
                case "1.2":
                    timeSpan = ElapsedH + ":" + ElapsedM + ":" + ElapsedS;
                    break;
                case "2004":
                    timeSpan = "PT" + ElapsedH + "H" + ElapsedM + "M" + ElapsedS + "S";
                    break;
            }

            return timeSpan;
        }

    };

}