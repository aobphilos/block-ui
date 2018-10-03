/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named DrugGroup */
export interface IDrugGroup {
  /**
   * The class identifier for this type
   * default: org.health.network.DrugGroup
   */
  $class?: string;
  /** The instance identifier for this type */
  DrugGroupId: string;
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
