export interface Students {
    fname:string;
    lname:string;
    email:string;
    phone:number;
    pass:string;
    rpass:string;
    

    }
    export interface UniqueConstraintError {
      errorNum: Number;
      offset: Number;
    }
    export interface InsertedSuccess {
      lastRowid: String;
      rowsAffected: Number;
    }
    export interface Read {
        Result:[];
     }
    export interface LoginDetails{
      email: string;
      pass: string;
    }