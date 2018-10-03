/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Chronic */
export interface IChronic {
  /**
   * The class identifier for this type
   * default: org.health.network.Chronic
   */
  $class?: string;
  /** The instance identifier for this type */
  ChronicId: string;
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
