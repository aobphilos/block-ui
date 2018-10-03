/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named AllergicLevel */
export interface IAllergicLevel {
  /**
   * The class identifier for this type
   * default: org.health.network.AllergicLevel
   */
  $class?: string;
  /** The instance identifier for this type */
  AllergicLevelId: string;
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
