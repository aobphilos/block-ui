/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named DiagnoseType */
export interface IDiagnoseType {
  /**
   * The class identifier for this type
   * default: org.health.network.DiagnoseType
   */
  $class?: string;
  /** The instance identifier for this type */
  DiagnoseTypeId: string;
  Name: string;
  Description: string;
  /** format: date-time */
  CreatedDate: string;
  CreatedBy: string;
  /** format: date-time */
  ModifiedDate: string;
  ModifiedBy: string;
  Status: string;
}
