/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Symptom */
export interface ISymptom {
  /**
   * The class identifier for this type
   * default: org.health.network.Symptom
   */
  $class?: string;
  /** The instance identifier for this type */
  SymptomId: string;
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