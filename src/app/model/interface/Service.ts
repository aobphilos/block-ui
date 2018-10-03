/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** A participant named Service */
export interface IService {
  /**
   * The class identifier for this type
   * default: org.health.network.Service
   */
  $class?: string;
  /** The instance identifier for this type */
  ServiceId: string;
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
