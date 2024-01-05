export enum URISTRING{
    URI = 'jdbc:mysql://localhost:3307/oegs-db/api/v1/',
    BREAKTIME = 'breakTime/',
    ABSENCE = 'absence/',
    EMPLOYEE = 'employee/',
    WORKINGHOURS = 'workingHours/',
    CLIENT = 'client/',
    LANGUAGE = 'language/',
}

export enum AbsenceStatusEnum {
    SICK = 'Sick',
    VACATION = 'Vacation',
}

export enum GenderEnum{
    MALE = 'Male',
    FEMALE = 'Female',
    MISC = 'Misc',
}

export enum NationalityEnum {
    GERMAN = 'German',
    ENGLISH = 'English',
    TURKISH = 'Turkish',
    SPANISH = 'Spanish',
}

export enum StatusEnum {
    OPEN = 'Open',
    IN_PROGRESS = 'In_progress',
    FAILED = 'Falied',
    DONE = 'Done',
}

export class BreakTime{
    public break_time_id: string;
    public break_start: Date;
    public break_end: Date;
    public status: StatusEnum;
    public employee_id: string;

    constructor(breakTime: BreakTime){
      this.break_time_id = breakTime.break_time_id;
      this.break_start = breakTime.break_start;
      this.break_end = breakTime.break_end;
      this.status = breakTime.status;
      this.employee_id = breakTime.employee_id;
    }
}

export class Absence{
    public absence_id: string;
    public employee_id: string;
    public absence_status: StatusEnum;
    public absence_start: Date;
    public absence_end: Date;
    public description: string;
    public status: StatusEnum;

    constructor(absence: Absence){
       this.absence_id = absence.absence_id;
       this.employee_id = absence.employee_id;
       this.absence_status = absence.absence_status;
       this.absence_start = absence.absence_start;
       this.absence_end = absence.absence_end;
       this.description = absence.description;
       this.status = absence.status;
      }
}

export class Employee{
    public employee_id: string;
    public first_name: string;
    public last_name: string;
    public adress: string;
    public postcode: number;
    public town: string;
    public gender: GenderEnum;
    public employed_since: Date;
    public is_employed: boolean;
    public remaining_vacation: number;
    public created_at: Date;
    public updeated_at: Date;

    constructor(employee: Employee){
        this.employee_id = employee.employee_id;
        this.first_name = employee.first_name;
        this.last_name = employee.last_name;
        this.adress = employee.adress;
        this.postcode = employee.postcode;
        this.town = employee.town;
        this.gender = employee.gender;
        this.employed_since = employee.employed_since;
        this.is_employed = employee.is_employed;
        this.remaining_vacation = employee.remaining_vacation;
        this.created_at = employee.created_at;
        this.updeated_at = employee.updeated_at;
       }
}

export class WorkingHours{
    public working_hours_id: string;
    public work_hour_start: Date;
    public work_hour_end: Date;
    public employee_id: string;
    public client_id: string;
    public status: StatusEnum;
    public created_at: Date;
    public modified_at: Date;

     constructor(workingHours: WorkingHours){
        this.working_hours_id = workingHours.working_hours_id;
        this.work_hour_start = workingHours.work_hour_start;
        this.work_hour_end = workingHours.work_hour_end;
        this.employee_id = workingHours.employee_id;
        this.client_id = workingHours.client_id;
        this.status = workingHours.status;
        this.created_at = workingHours.created_at;
        this.modified_at = workingHours.modified_at;
       }
}

export class Client{
    public clientid: string;
    public clientName: string;
    public adress: string;
    public postCode: number;
    public town: string;
    public created_at: Date;
    public updeated_at: Date;

    constructor(client: Client){
        this.clientid = client.clientid;
        this.clientName = client.clientName;
        this.adress = client.adress;
        this.postCode = client.postCode;
        this.town = client.town;
        this.created_at = client.created_at;
        this.updeated_at = client.updeated_at;
    }
}

export class Language{
    public language_code: string;
    public language_name: string; 

    constructor(language: Language){
        this.language_code = language.language_code;
        this.language_name = language.language_name;
    }
}

