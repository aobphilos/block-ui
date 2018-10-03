/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Diagnose */
export interface IDiagnose {
  /**
   * The class identifier for this type
   * default: org.health.network.Diagnose
   */
  $class?: string;
  /** The instance identifier for this type */
  DiagnoseId: string;
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
