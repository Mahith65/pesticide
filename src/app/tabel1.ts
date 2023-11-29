export interface Pesticide {
    crop_name:string;
    fertilizer:string;
    dosage_acer:string;
    dosage_water:string;

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