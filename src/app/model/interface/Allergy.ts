/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Allergy */
export interface IAllergy {
  /**
   * The class identifier for this type
   * default: org.health.network.Allergy
   */
  $class?: string;
  /** The instance identifier for this type */
  AllergyId: string;
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
