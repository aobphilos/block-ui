/**
 * 1.0.0
 * LoopBack Application
 * undefined/api
 */

/** An asset named ReconcileSummaryDischarge */
export interface IReconcileSummaryDischarge {
  /**
   * The class identifier for this type
   * default: org.health.network.ReconcileSummaryDischarge
   */
  $class?: string;
  /** The instance identifier for this type */
  ReconcileId: string;
  SummaryDischargeId: string;
  /** format: date-time */
  ExchangeDate: string;
  /** format: date-time */
  FromHospitalCode: string;
  /** format: double */
  ToHospitalCode: number;
  /** format: double */
  TotalRecords: number;
  /** format: double */
  TotalPatient: number;
  /** format: double */
  TotalSymptom: number;
  /** format: double */
  TotalDrug: number;
  /** format: double */
  TotalDrungAmount: number;
  /** format: double */
  TotalRW: number;
  /** format: date-time */
  CreatedDate: string;
  CreatedBy: string;
}
