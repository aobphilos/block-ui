/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Drug */
export interface IDrug {
  /**
   * The class identifier for this type
   * default: org.health.network.Drug
   */
  $class?: string;
  /** The instance identifier for this type */
  DrugId: string;
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
