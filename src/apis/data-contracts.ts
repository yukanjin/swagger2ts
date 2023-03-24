/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * ApprvFlowvarEntity对象
 * 流程活动的变量定义
 */
export interface ApprvFlowvarEntity对象 {
  /** 活动编码。冗余字段，提高数据可读 */
  actCode?: string;
  /**
   * 变量所属节点
   * @format int64
   */
  actId?: number;
  /**
   * 逻辑id主键
   * @format int64
   */
  id?: number;
  /** 备注 */
  remarks?: string;
  /** 变量名 */
  varName?: string;
  /** 是否必须 */
  varRequired?: boolean;
  /** 变量类型。暂时考虑：boolean, int, string, float */
  varType?: string;
  /**
   * 工作流id
   * @format int64
   */
  workflowId?: number;
}

/** CommonDictItemVo */
export interface CommonDictItemVo {
  /** 基本介绍 */
  briefDescription?: string;
  /** 字典项编码 */
  dictItemCode?: string;
  /** 字典项值 */
  dictItemValue?: string;
  /** 字典类别编码 */
  dictTypeCode?: string;
  /** 字典类别名称 */
  dictTypeName?: string;
  id: string;
  /** 备注 */
  remarks?: string;
}

/** CompanyInstrumentVo */
export interface CompanyInstrumentVo {
  /**
   * 数量
   * @format int32
   */
  amount?: number;
  /**
   * 购置日期
   * @format date-time
   */
  buyDate?: string;
  /** 企业id */
  companyId?: string;
  /** 逻辑id */
  instrumentId?: string;
  /** 型号 */
  model?: string;
  /** 仪器名称 */
  name?: string;
  /** 备注 */
  remarks?: string;
  /** 仪器状态 */
  state?: string;
}

/** NextNodeAndAssigneeVo */
export interface NextNodeAndAssigneeVo {
  actCode: string;
  actName: string;
  /** @format int64 */
  id: number;
  nextAssignees: string[];
  /** @format int64 */
  workflowId: number;
}

/** NuclideTakebackInfoVo */
export type NuclideTakebackInfoVo = object;

/** PageVo«CompanyInstrumentVo» */
export interface PageVoCompanyInstrumentVo {
  contents: CompanyInstrumentVo[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«射线装置台账Vo» */
export interface PageVo射线装置台账Vo {
  contents: Type射线装置台账Vo[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«射线装置活动种类和范围» */
export interface PageVo射线装置活动种类和范围 {
  contents: Type射线装置活动种类和范围[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«放射源使用台账» */
export interface PageVo放射源使用台账 {
  contents: Type放射源使用台账[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«放射源活动种类和范围Vo» */
export interface PageVo放射源活动种类和范围Vo {
  contents: Type放射源活动种类和范围Vo[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«放射源销售台账» */
export interface PageVo放射源销售台账 {
  contents: Type放射源销售台账[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«辐射安全管理人员Vo» */
export interface PageVo辐射安全管理人员Vo {
  contents: Type辐射安全管理人员Vo[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«辐射工作人员Vo» */
export interface PageVo辐射工作人员Vo {
  contents: Type辐射工作人员Vo[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«非密封放射性物质使用台账» */
export interface PageVo非密封放射性物质使用台账 {
  contents: Type非密封放射性物质使用台账[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** PageVo«非密封放射性物质种类和活动方位Vo» */
export interface PageVo非密封放射性物质种类和活动方位Vo {
  contents: Type非密封放射性物质种类和活动方位Vo[];
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  total: number;
}

/** 企业涉源部门 */
export interface Type企业涉源部门 {
  /** 地址 */
  address?: string;
  /** 企业id */
  companyId?: string;
  /** 部门名称 */
  deptName?: string;
  /** 部门id */
  id?: string;
  /** 负责人 */
  principal?: string;
  /** 工作场所, 同一部门会有多个场所 */
  workSite?: string[];
}

/** 企业防护用品Vo */
export interface Type企业防护用品Vo {
  /** 企业id */
  companyId?: string;
  /**
   * 个人剂量计
   * @format int32
   */
  gerenJiliangJi?: number;
  /** 其他 */
  others?: string;
  /** 逻辑id */
  protectGoodsId?: string;
  /**
   * 铅帽
   * @format int32
   */
  qianMao?: number;
  /**
   * 铅屏风
   * @format int32
   */
  qianPingFeng?: number;
  /**
   * 铅手套
   * @format int32
   */
  qianShouTao?: number;
  /**
   * 铅围脖
   * @format int32
   */
  qianWeiBo?: number;
  /**
   * 铅围裙
   * @format int32
   */
  qianWeiQun?: number;
  /**
   * 铅眼镜
   * @format int32
   */
  qianYanJing?: number;
  /**
   * 铅衣
   * @format int32
   */
  qianYi?: number;
}

/** 单位信息中的许可证信息 */
export interface Type单位信息中的许可证信息 {
  /** 单位状态 */
  companyStatus?: string;
  /** 单位类型： 核技术利用单位等 */
  companyType?: string;
  /** 许可条件 */
  licenseCondition?: string;
  /**
   * 有效期至
   * @format date-time
   */
  licenseEndDate?: string;
  /** 发证机关 */
  licenseIssueAuthority?: string;
  /** 审批机关 */
  licenseIssueOrg?: string;
  /** 许可证号 */
  licenseNo?: string;
  /**
   * 发证日期
   * @format date-time
   */
  licenseStartDate?: string;
}

/** 单位基本信息 */
export interface Type单位基本信息 {
  /** 附件列表 */
  attachments?: Type文件附件Vo[];
  /** 公司id。对应表主键，单同一家公司多个申请时companyId不同 */
  companyId?: string;
  /** 单位性质 */
  companyKind?: string;
  /** 其他单位性质 */
  companyKindOther?: string;
  /** 单位名称 */
  companyName?: string;
  /** 通讯地址 */
  contactAddr?: string;
  /** 联系人 */
  contactPerson?: string;
  /** 联系电话 */
  contactPhone?: string;
  /** 联系邮编 */
  contactPostcode?: string;
  /** 行业类别 */
  industryType?: string;
  /** 公司实例id，对于公司唯一。 */
  instanceId?: string;
  /** 纬度 */
  latitude?: string;
  /** 法人身份证号 */
  legalIdCode?: string;
  /** 法人身份证件类型 */
  legalIdType?: string;
  /** 法人姓名 */
  legalPerson?: string;
  /** 法人联系电话 */
  legalPersonPhone?: string;
  licenseInfo?: Type单位信息中的许可证信息;
  /** 经度 */
  longitude?: string;
  /** 非密封放射性物质范围 */
  nonsealActiveType?: string;
  /** 非密封放射性物质种类 */
  nonsealCategories?: string;
  /** 单位代码,统一社会信用代码或组织机构代码等 */
  organizationCode?: string;
  /** 放射源生产种类和范围 */
  producibleNuclideCategories?: string;
  /** 射线装置生产种类 */
  producibleRadialsetCategories?: string;
  /** 涉源部门 */
  radialDepartments?: Type企业涉源部门[];
  /** 射线装置销售（含建造）I类射线装置 */
  radialProduceSaleI?: boolean;
  /** 注册地址 */
  registedAddr?: string;
  /** 实际建设用地面积 */
  registedArea?: string;
  /** 注册地行政区划: 浙江省-杭州市-上城区 */
  registedDistrict?: string;
  /** 注册地邮政编码 */
  registedPostcode?: string;
  /** 放射源销售种类和范围 */
  saleableNuclideCategories?: string;
  /** 射线装置销售种类 */
  saleableRadialsetCategories?: string;
  /** 放射源使用种类和范围 */
  usableNuclideCategories?: string;
  /** 射线装置使用种类 */
  usableRadialsetCategories?: string;
}

/** 变量实例结果 */
export interface Type变量实例结果 {
  /** 变量名 */
  varName?: string;
  /** 变量类型 */
  varType?: string;
  /** 变量值 */
  varValue?: object;
}

/** 射线装置使用用途 */
export interface Type射线装置使用用途 {
  /** 是否医用 */
  beMedical?: boolean;
  /**
   * 逻辑Id
   * @format int32
   */
  id?: number;
  /** 装置名称 */
  setName?: string;
  /**
   * 类别
   * @format int32
   */
  setType?: number;
}

/** 射线装置台账Vo */
export interface Type射线装置台账Vo {
  /** 管电流 */
  amperemeter?: string;
  /** 类别 */
  category?: string;
  /** 企业instanceid */
  companyInstanceId?: string;
  /** 去向 */
  destination?: string;
  /** 装置名称 */
  deviceName?: string;
  /** 粒子能量 */
  particleEnergy?: string;
  /** 功率 */
  power?: string;
  /** 逻辑id */
  recordId?: string;
  /** 场所 */
  siteName?: string;
  /** 来源 */
  source?: string;
  /** 规格型号 */
  specAndModel?: string;
  /** 装置状态 */
  state?: string;
  /** 用途 */
  useType?: string;
  /** 管电压 */
  voltage?: string;
}

/** 射线装置活动种类和范围 */
export interface Type射线装置活动种类和范围 {
  /** id */
  activeRangeId?: string;
  /** 活动种类 */
  activeType?: string;
  /** 企业id */
  companyId?: string;
  /**
   * 装置数量
   * @format int32
   */
  deviceCount?: number;
  /** 装置名称 */
  deviceName?: string;
  /** 类别 */
  deviceType?: string;
  /** 工作场所 */
  workSite?: string;
}

/** 待办工作板«object» */
export interface Type待办工作板Object {
  /** 业务类型 */
  businessFlowType?:
    | "LEDGER_MAINTAIN"
    | "LICENSE_APPLY"
    | "LICENSE_CANCEL"
    | "LICENSE_CONTINUE"
    | "LICENSE_MODIFY"
    | "LICENSE_PARTTERMINATE"
    | "LICENSE_REAPPLY"
    | "NONSEAL_DRUG_TRANSFER_RECORD"
    | "NONSEAL_PROVINCE_IN_CANCEL"
    | "NONSEAL_PROVINCE_IN_RECORD"
    | "NONSEAL_PROVINCE_OUT_CANCEL"
    | "NONSEAL_PROVINCE_OUT_RECORD"
    | "NONSEAL_TRANSFER_RECORD"
    | "NUCLIDE_CAT_I_TRANSFER_RECORD"
    | "NUCLIDE_EXPORT_RECORD"
    | "NUCLIDE_IMPORT_RECOED"
    | "NUCLIDE_PROVINCIALUSE_IN_RECORD"
    | "NUCLIDE_STRANGEUSE_IN_CANCEL"
    | "NUCLIDE_STRANGEUSE_IN_RECORD"
    | "NUCLIDE_STRANGEUSE_OUT_CANCEL"
    | "NUCLIDE_STRANGEUSE_OUT_RECORD"
    | "NUCLIDE_TAKEBACK_RECORD"
    | "NUCLIDE_TRANSFER"
    | "NUCLIDE_TRANSFER_RECORD"
    | "NUCLIDE_WASTE_SHIFT_RECORD"
    | "NUCLIDE_WASTE_STORAGE"
    | "RADIAL_MANAGE_EXEMPT_RECORD";
  /** 分类名称 */
  categoryName?: string;
  /**
   * 总数量。和下面list中元素个数不匹配，list只是前几个
   * @format int32
   */
  count?: number;
  /** 前几个待办工作 */
  workList?: object[];
}

/** 放射源使用台账 */
export interface Type放射源使用台账 {
  /**
   * 审核日期
   * @format date
   */
  auditDate?: string;
  /** 审核人 */
  auditor?: string;
  /** 类别 */
  category?: string;
  /** 企业id */
  companyInstanceId?: string;
  /** 去向 */
  destination?: string;
  /** 出厂活度 */
  leaveFactoryActivity?: string;
  /**
   * 出厂日期
   * @format date
   */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclideCode?: string;
  /** 实时活度 */
  realtimeActivity?: string;
  /** 台账id主键 */
  recordId?: string;
  /** 工作场所 */
  siteName?: string;
  /** 来源 */
  source?: string;
  /** 编码 */
  sourceCode?: string;
  /** 状态 */
  state?: string;
  /** 标号 */
  tab?: string;
  /** 用途 */
  usage?: string;
}

/** 放射源出口信息 */
export interface Type放射源出口信息 {
  attachments: Type文件附件Vo[];
  auditOpinion?: string;
  detailNuclideList: Type放射源出口明细[];
  entrustCompanyContaceAddr?: string;
  entrustCompanyDoPerson?: string;
  entrustCompanyInstanceId?: string;
  entrustCompanyLicense?: string;
  entrustCompanyName?: string;
  entrustCompanyPhoneFax?: string;
  entrustCompanyPost?: string;
  exportCompanyContactAddr?: string;
  exportCompanyDoPerson?: string;
  exportCompanyInstanceId?: string;
  exportCompanyLicense?: string;
  exportCompanyName?: string;
  exportCompanyPhoneFax?: string;
  exportCompanyPost?: string;
  /** 出口逻辑id */
  exportId?: string;
  exportReason?: string;
  nuclideReceiveCompany?: string;
  nuclideReceiveCountry?: string;
  passNo?: string;
  requestNo?: string;
  responseNo?: string;
}

/** 放射源出口明细 */
export interface Type放射源出口明细 {
  /** 类别 */
  category?: string;
  /** 编码 */
  code?: string;
  /** 出口明细逻辑主键 */
  detailId?: string;
  /** 委托所在地备案时间 */
  entrustRecordDate?: string;
  /** 委托单位所在地备案人 */
  entrustRecordPerson?: string;
  /** 出口id */
  exportId?: string;
  /** 出口所在地备案时间 */
  exportRecordDate?: string;
  /** 出口单位所在地备案人 */
  exportRecordPerson?: string;
  /** 半衰期，寿期 */
  halfPeriod?: string;
  /** 出厂活度 */
  leaveFactoryActivity?: string;
  /**
   * 出厂日期
   * @format date
   */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclide?: string;
  /** 产源单位 */
  nuclideManufacture?: string;
  /** 场所 */
  site?: string;
  /** 备案状态 */
  status?: string;
  /** 标号 */
  tab?: string;
  /** 用途 */
  useType?: string;
}

/** 放射源活动种类和范围Vo */
export interface Type放射源活动种类和范围Vo {
  /** 活动范围主键，逻辑主键 */
  activeRangeId?: string;
  /** 活动类型 */
  activeType?: string;
  /** 企业id */
  companyId?: string;
  /** 类别，核素类别，如V类 */
  nuclideCategory?: string;
  /** 核素名称 */
  nuclideName?: string;
  /** 总活度 */
  totalActivity?: string;
  /** 工作场所 */
  workSite?: string;
}

/** 放射源跨省异地使用详细放射源清单-单项 */
export interface Type放射源跨省异地使用详细放射源清单单项 {
  category?: string;
  /** 放射源编码 */
  code?: string;
  detailId: string;
  leaveFactoryActivity?: string;
  /** @format date */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclide?: string;
  status?: string;
  strangeUseId: string;
  /** 标号 */
  tab?: string;
  useType?: string;
}

/** 放射源转让中放射源清单-单项 */
export interface Type放射源转让中放射源清单单项 {
  category?: string;
  /** 放射源编码 */
  code?: string;
  detailId: string;
  /** 转入地备案时间 */
  inDoDate?: string;
  /** 转入地备案人 */
  inDoPerson?: string;
  leaveFactoryActivity?: string;
  /** @format date */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclide?: string;
  /** 转出地备案时间 */
  outDoDate?: string;
  /** 转出地备案人 */
  outDoPerson?: string;
  /** 场所 */
  site?: string;
  /** 状态 */
  status?: string;
  /** 标号 */
  tab?: string;
  transferId: string;
  useType?: string;
}

/** 放射源转让信息 */
export interface Type放射源转让信息 {
  attachments: Type文件附件Vo[];
  /** 审批意见 */
  bePass?: boolean;
  detailNuclideList: Type放射源转让中放射源清单单项[];
  /** @format date */
  doDate?: string;
  /** 审核人，经办人 */
  doPerson?: string;
  inCompanyName?: string;
  inCompanyPost?: string;
  inContactAddr?: string;
  inDoPerson?: string;
  inLicenseNo?: string;
  inPhoneFax?: string;
  outCompanyName?: string;
  outCompanyPost?: string;
  outContactAddr?: string;
  outDoPerson?: string;
  outLicenseNo?: string;
  outPhoneFax?: string;
  passNo?: string;
  /** 申请文号 */
  requestNo?: string;
  responseNo?: string;
  transferId: string;
  transferReason?: string;
  transferReasonOther?: string;
}

/** 放射源进口信息 */
export interface Type放射源进口信息 {
  /** 附件 */
  attachments?: Type文件附件Vo[];
  /** 审批意见 */
  auditOpinion?: string;
  /** 放射源清单 */
  detailNuclideList?: Type放射源进口细节清单[];
  /** 出口国家（地区） */
  exportCountry?: string;
  /** 进口单位通讯地址 */
  importCompanyContactAddr?: string;
  /** 进口单位经办人 */
  importCompanyDoPerson?: string;
  /** 进口单位实例id，instanceid */
  importCompanyInstanceId?: string;
  /** 进口单位许可证号 */
  importCompanyLicense?: string;
  /** 进口单位名称 */
  importCompanyName?: string;
  /** 进口单位电话/传真 */
  importCompanyPhoneFax?: string;
  /** 进口单位邮编 */
  importCompanyPost?: string;
  /** 进口id */
  importId?: string;
  /** 进口理由 */
  importReason?: string;
  /** 产源国家（地区） */
  produceCountry?: string;
  /** 用户单位通讯地址 */
  useCompanyContactAddr?: string;
  /** 用户单位经办人 */
  useCompanyDoPerson?: string;
  /** 用户单位实例id，instanceid */
  useCompanyInstanceId?: string;
  /** 用户单位许可证号 */
  useCompanyLicense?: string;
  /** 用户单位名称 */
  useCompanyName?: string;
  /** 用户单位电话/传真 */
  useCompanyPhoneFax?: string;
  /** 用户单位邮编 */
  useCompanyPost?: string;
}

/** 放射源进口细节清单 */
export interface Type放射源进口细节清单 {
  /** 类别 */
  category?: string;
  /** 编码 */
  code?: string;
  /** 逻辑主键 */
  detailId?: string;
  /** 半衰期，寿期 */
  halfPeriod?: string;
  /** 关联的进口申请主键 */
  importId?: string;
  /** 进口单位备案日期 */
  importRecordDate?: string;
  /** 进口单位地备案人 */
  importRecordPerson?: string;
  /** 出厂活度 */
  leaveFactoryActivity?: string;
  /**
   * 出厂日期
   * @format date
   */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclide?: string;
  /** 产源单位 */
  nuclideManufacture?: string;
  /** 场所 */
  site?: string;
  /** 备案状态 */
  status?: string;
  /** 标号 */
  tab?: string;
  /** 用户地备案日期 */
  useRecordDate?: string;
  /** 用户地备案人 */
  useRecordPerson?: string;
  /** 用途 */
  useType?: string;
}

/** 放射源销售台账 */
export interface Type放射源销售台账 {
  /** 类别 */
  category?: string;
  /** 企业id */
  companyInstanceId?: string;
  /** 出厂活度 */
  leaveFactoryActivity?: string;
  /**
   * 出厂日期
   * @format date-time
   */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclide?: string;
  /** 批准文号 */
  passNo?: string;
  /**
   * 生产日期
   * @format date-time
   */
  produceDate?: string;
  /**
   * 记录日期
   * @format date-time
   */
  recordDate?: string;
  /** 逻辑id主键 */
  recordId?: string;
  /** 记录人 */
  recordPerson?: string;
  /**
   * 发货时间
   * @format date-time
   */
  sendDate?: string;
  /** 工作场所 */
  siteName?: string;
  /** 来源 */
  source?: string;
  /** 状态 */
  state?: string;
  /** 标号 */
  tab?: string;
  /** 用途 */
  useType?: string;
}

/** 文件附件Vo */
export interface Type文件附件Vo {
  /** 业务相关id，对应表中Id字段。如许可证申请相关业务Id字段值就是companyId */
  businessId?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件分类 */
  fileType?: string;
  /** 附件的主键 */
  sno?: string;
}

/** 流程的活动实例列表事项经过的流程环节 */
export interface Type流程的活动实例列表事项经过的流程环节 {
  /** 活动节点编码 */
  actCode?: string;
  /**
   * 活动id
   * @format int64
   */
  actId?: number;
  /**
   * 活动实例id
   * @format int64
   */
  actInstId?: number;
  /** 活动节点名称 */
  actName?: string;
  /** 执行者 */
  assignee?: string;
  /**
   * 流程实例id
   * @format int64
   */
  flowInstId?: number;
  /**
   * 执行时间，提交时间
   * @format date-time
   */
  submitDate?: string;
  /** 变量结果 */
  varInstList?: Type变量实例结果[];
  /**
   * 流程id
   * @format int64
   */
  workflowId?: number;
}

/** 许可证变更办理信息 */
export interface Type许可证变更办理信息 {
  /** 附件 */
  attachments?: Type文件附件Vo[];
  /** 办理状态,是否受理 */
  beResponded?: boolean;
  /** 经办人 */
  companyDoPerson?: string;
  /** 经办人电话 */
  companyDoPersonPhone?: string;
  /**
   * 经办时间
   * @format date
   */
  doDate?: string;
  /** 经办人 */
  doPerson?: string;
  /** 审批机关 */
  licenseIssueOrgan?: string;
  /** 变更的逻辑主键 */
  lmrCompanyId?: string;
  /** 新地址 */
  newAddress?: string;
  /** 新单位名称 */
  newCompanyName?: string;
  /** 新行政区划 */
  newDistrict?: string;
  /** 新法人 */
  newLegalPerson?: string;
  /** 新法人证件类型 */
  newLegalPersonId?: string;
  /** 新法人证件类型 */
  newLegalPersonIdType?: string;
  /** 原地址 */
  oldAddress?: string;
  /** 原单位名称 */
  oldCompanyName?: string;
  /** 原行政区划 */
  oldDistrict?: string;
  /** 原法人 */
  oldLegalPerson?: string;
  /** 原法人证件号码 */
  oldLegalPersonId?: string;
  /** 原法人证件类型 */
  oldLegalPersonIdType?: string;
  /** 批准文号 */
  passNo?: string;
  /** 申请文号 */
  requestNo?: string;
  /** 受理文号 */
  responseNo?: string;
}

/** 许可证延续信息 */
export interface Type许可证延续信息 {
  /** 种类和范围 */
  activeRangeInfo?: string[];
  /** 地址 */
  address?: string;
  /**
   * 审批审核时间
   * @format date
   */
  approveDate?: string;
  /** 审批审核人 */
  approvePerson?: string;
  /** 附件 */
  attachments?: Type文件附件Vo[];
  /** 办理状态, 是否受理 */
  beAccepted?: boolean;
  /** 审批状态（是否同意延续）。若未受理退回的，不显示审批信息 */
  beApproved?: boolean;
  /** 单位经办人 */
  companyDoPerson?: string;
  /** 单位经办人联系电话 */
  companyDoPersonPhone?: string;
  /** 企业主键，确切说是tt_lr_company表主键 */
  companyId?: string;
  /** 企业实例主键，企业的唯一值 */
  companyInstanceId?: string;
  /** 单位名称 */
  companyName?: string;
  /** 延续主键 */
  lcrCompanyId?: string;
  /** 法人姓名 */
  legalPerson?: string;
  /** 法人证件号码 */
  legalPersonId?: string;
  /** 法人证件类型 */
  legalPersonIdType?: string;
  /** 法人电话 */
  legalPersonPhone?: string;
  /**
   * 有效期至=许可证失效日期
   * @format date
   */
  licenseEndDate?: string;
  /** 审批机关 */
  licenseIssueOrgan?: string;
  /** 许可证号 */
  licenseNo?: string;
  /**
   * 发证日期=许可证生效日期
   * @format date
   */
  licenseStartDate?: string;
  /**
   * 新有效期至（审批不通过时不显示）
   * @format date
   */
  newLicenseEndDate?: string;
  /**
   * 新发证日期（审批不通过时不显示）
   * @format date
   */
  newLicenseStartDate?: string;
  /** 不同意理由 */
  notApprovedReason?: string;
  /** 批准文号 */
  passNo?: string;
  /** 申请文号 */
  requestNo?: string;
  /**
   * 办理（受理）审核时间
   * @format date
   */
  responseDate?: string;
  /** 受理编号 */
  responseNo?: string;
  /** 办理（受理）审核人 */
  responsePerson?: string;
}

/** 许可证注销信息 */
export interface Type许可证注销信息 {
  /**
   * 办理时间
   * @format date
   */
  acceptDate?: string;
  /** 办理（受理）审核人 */
  acceptPerson?: string;
  /** 活动种类和范围 */
  activeRandeInfo?: string;
  /** 地址 */
  address?: string;
  /**
   * 审核时间
   * @format date
   */
  approveDate?: string;
  /** 审核人 */
  approvePerson?: string;
  /** 附件 */
  attachments?: Type文件附件Vo[];
  /** 办理状态，实际表示是否受理 */
  beAccepted?: boolean;
  /** 审批状态，是否同意 */
  beApproved?: boolean;
  companyId?: string;
  /** 企业instanceId */
  companyInstanceId?: string;
  /** 单位名称 */
  companyName?: string;
  /** 经办人 */
  doPerson?: string;
  /** 经办人联系电话 */
  doPersonPhone?: string;
  /** 法人 */
  legalPerson?: string;
  /** 法人身份证号 */
  legalPersonId?: string;
  /** 法人身份类型 */
  legalPersonIdType?: string;
  /** 法人联系电话 */
  legalPersonPhone?: string;
  /**
   * 许可证有效期至
   * @format date
   */
  licenseEndDate?: string;
  /** 审批机关 */
  licenseIssueOrgan?: string;
  /** 许可证号 */
  licenseNo?: string;
  /**
   * 许可证发证日期
   * @format date
   */
  licenseStartDate?: string;
  /** 逻辑主键 */
  llrCompanyId?: string;
  /** 审批不通过原因：审批不同意时显示 */
  notApprovedReason?: string;
  /** 批准文号 */
  passNo?: string;
  /** 申请编号 */
  requestNo?: string;
  /** 受理编号 */
  responseNo?: string;
}

/** 许可证终止信息暂时没看到系统相关信息 */
export type Type许可证终止信息暂时没看到系统相关信息 = object;

/** 跨省异地使用移入地备案 */
export interface Type跨省异地使用移入地备案 {
  /** 附件 */
  attachment?: Type文件附件Vo[];
  /** 使用（移入）地省级环保部门是否备案 */
  beInBackup?: boolean;
  /** 移入地是否注销 */
  beInLogout?: boolean;
  /** 移出地是否备案 */
  beOutBackup?: boolean;
  /** 移出地是否注销 */
  beOutLogout?: boolean;
  /** 经办人 */
  companyDoPerson?: string;
  /** 经办人电话 */
  companyDoPersonPhone?: string;
  /** 单位名称 */
  companyName?: string;
  /** 公司邮编 */
  companyPost?: string;
  /** 通讯地址 */
  contactAddr?: string;
  detailStrangeUseList: Type放射源跨省异地使用详细放射源清单单项[];
  /**
   * 移入地备案时间
   * @format date
   */
  inBackupDate?: string;
  /** 移入地备案审核人 */
  inBackupPerson?: string;
  /** 接收单位 */
  inCompanyName?: string;
  /** 计划作业详细地址 */
  inDetailAddr?: string;
  /**
   * 计划作业结束时间
   * @format date
   */
  inEndDate?: string;
  /**
   * 移入地注销时间
   * @format date
   */
  inLogoutDate?: string;
  /** 移入地注销审核人 */
  inLogoutPerson?: string;
  /**
   * 计划作业开始时间
   * @format date
   */
  inStartDate?: string;
  /** 许可证证书编号 */
  licenseNo?: string;
  /**
   * 移出地备案时间
   * @format date
   */
  outBackupDate?: string;
  /** 移出地备案审核人 */
  outBackupPerson?: string;
  /** @format date */
  outLogoutDate?: string;
  /** 移出地注销审核人 */
  outLogoutPerson?: string;
  /** 批准文号/备案文号。一个跨省使用有移入和移出，不知道具体是哪个的备案号 */
  passNo?: string;
  /** 项目负责人 */
  projectPrincipal?: string;
  /** 项目负责人电话 */
  projectPrincipalPhone?: string;
  /** 辐射安全负责人电话 */
  radialPrincipalPhone?: string;
  /** 辐射安全负责人 */
  radialSafePrincipal?: string;
  /** 申请文号 */
  requestNo?: string;
  /** 受理编号 */
  responseNo?: string;
  /** 逻辑主键 */
  stramgeUseId?: string;
  /** 异地作业内容 */
  strangeUseContent?: string;
}

/** 辐射安全管理人员Vo */
export interface Type辐射安全管理人员Vo {
  companyId: string;
  /** 工作部门 */
  department?: string;
  /** 管理人员性质 */
  duty?: string;
  /** 专职或兼职 */
  fullOrPart?: string;
  /** 职务或职称 */
  job?: string;
  /** 专业 */
  major?: string;
  /** 姓名 */
  name?: string;
  /** 是否注册核安全工程师 */
  nuclearEngeer?: boolean;
  personId: string;
  /** 性别 */
  sex?: string;
}

/** 辐射安全管理机构Vo */
export interface Type辐射安全管理机构Vo {
  companyId: string;
  /** 联系人email */
  contactEmail?: string;
  /** 传真 */
  contactFax?: string;
  /** 联系人手机 */
  contactMobile?: string;
  /** 联系人姓名 */
  contactPerson?: string;
  /** 联系人电话 */
  contactTel?: string;
  /** 机构名称 */
  departName?: string;
  managers?: PageVo辐射安全管理人员Vo;
}

/** 辐射工作人员Vo */
export interface Type辐射工作人员Vo {
  /**
   * 辐射安全与防护培训时间-开始时间
   * @format date-time
   */
  beginTrainDate?: string;
  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;
  companyId: string;
  /** 学历 */
  degree?: string;
  /**
   * 辐射安全与防护培训时间-结束时间
   * @format date-time
   */
  endTrainDate?: string;
  /** 毕业学校 */
  graduateSchool?: string;
  /** 专业 */
  major?: string;
  /** 姓名 */
  name?: string;
  /** 身份证号 */
  personIdCode?: string;
  /** 性别 */
  sex?: string;
  /** 培训证号 */
  trainNo?: string;
  /** 工作岗位 */
  workPosition?: string;
  workerId: string;
}

/** 通用字典类型 */
export interface Type通用字典类型 {
  /** 字典类型编码 */
  dictTypeCode?: string;
  /** 字典类型名称 */
  dictTypeName?: string;
}

/** 非密封放射性物质使用台账 */
export interface Type非密封放射性物质使用台账 {
  /**
   * 审核日期
   * @format date-time
   */
  auditDate?: string;
  /** 审核人 */
  auditor?: string;
  /** 类别 */
  category?: string;
  /** 企业id */
  companyInstanceId?: string;
  /** 去向 */
  destination?: string;
  /**
   * 频次
   * @format int32
   */
  frequency?: number;
  /** 出厂活度 */
  leaveFactoryActivity?: string;
  /**
   * 出厂日期
   * @format date-time
   */
  leaveFactoryDate?: string;
  /** 核素 */
  nuclide?: string;
  /** id */
  recordId?: string;
  /** 备注 */
  remarks?: string;
  /** 工作场所 */
  siteName?: string;
  /** 来源 */
  source?: string;
  /** 状态 */
  state?: string;
  /** 标号 */
  tab?: string;
  /** 用途 */
  useType?: string;
}

/** 非密封放射性物质种类和活动方位Vo */
export interface Type非密封放射性物质种类和活动方位Vo {
  /** 活动范围Id */
  activeRangeId?: string;
  /** 企业id */
  companyId?: string;
  /** 日等效最大操作量 */
  dayMaxValue?: string;
  /** 核素名称 */
  nuclideName?: string;
  /** 场所等级 */
  siteLevel?: string;
  /** 工作场所 */
  workSite?: string;
  /** 年最大用量 */
  yearMaxValue?: string;
}
