/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Hospital */
export interface IHospital {
  /**
   * The class identifier for this type
   * default: org.health.network.Hospital
   */
  $class?: string;
  /** The instance identifier for this type */
  HospitalId: string;
  Name: string;
  Street: string;
  Address: string;
  City: string;
  SuburbDistrict: string;
  StateProvince: string;
  Country: string;
  ZipCode: string;
  PhoneNo: string;
  PhoneExt: string;
  /** format: double */
  Latitude: number;
  /** format: double */
  Longitude: number;
  /** format: date-time */
  CreatedDate: string;
  CreatedBy: string;
  /** format: date-time */
  ModifiedDate: string;
  ModifiedBy: string;
  Status: string;
}
