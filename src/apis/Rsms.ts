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

import {
  ApprvFlowvarEntity对象,
  CommonDictItemVo,
  NextNodeAndAssigneeVo,
  NuclideTakebackInfoVo,
  PageVoCompanyInstrumentVo,
  PageVo射线装置台账Vo,
  PageVo射线装置活动种类和范围,
  PageVo放射源使用台账,
  PageVo放射源活动种类和范围Vo,
  PageVo放射源销售台账,
  PageVo辐射工作人员Vo,
  PageVo非密封放射性物质使用台账,
  PageVo非密封放射性物质种类和活动方位Vo,
  Type企业防护用品Vo,
  Type单位基本信息,
  Type射线装置使用用途,
  Type待办工作板Object,
  Type放射源出口信息,
  Type放射源转让信息,
  Type放射源进口信息,
  Type流程的活动实例列表事项经过的流程环节,
  Type许可证变更办理信息,
  Type许可证延续信息,
  Type许可证注销信息,
  Type许可证终止信息暂时没看到系统相关信息,
  Type跨省异地使用移入地备案,
  Type辐射安全管理机构Vo,
  Type通用字典类型,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Rsms<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags basic-search-controller
   * @name GetCommonDictItemsUsingGet
   * @summary 查询某字典类别的字典项
   * @request GET:/rsms/basicSearch/commonDictItems
   */
  getCommonDictItemsUsingGet = (
    query: {
      /** 字典类别编码 */
      dictTypeCode: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CommonDictItemVo[], void>({
      path: `/rsms/basicSearch/commonDictItems`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-search-controller
   * @name GetCommonDictTypesUsingGet
   * @summary 查询所有通用字典类别
   * @request GET:/rsms/basicSearch/commonDictTypes
   */
  getCommonDictTypesUsingGet = (
    query?: {
      /** 字典编码。不传参则忽略 */
      dictTypeCode?: string;
      /** 字典名称。不传参则忽略该条件。查询条件“包含” */
      dictTypeName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type通用字典类型[], void>({
      path: `/rsms/basicSearch/commonDictTypes`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-search-controller
   * @name NuclidesUsingGet
   * @summary 核素列表查询
   * @request GET:/rsms/basicSearch/nuclides
   */
  nuclidesUsingGet = (params: RequestParams = {}) =>
    this.request<string[], void>({
      path: `/rsms/basicSearch/nuclides`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-search-controller
   * @name RadialsetUseTypesUsingGet
   * @summary 射线装置用途
   * @request GET:/rsms/basicSearch/radialsetUseTypes
   */
  radialsetUseTypesUsingGet = (params: RequestParams = {}) =>
    this.request<Type射线装置使用用途[], void>({
      path: `/rsms/basicSearch/radialsetUseTypes`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags business-work-controller
   * @name GetWorkCategoriesUsingGet
   * @summary 获取事项类别列表
   * @request GET:/rsms/businessWorks/workCategories
   */
  getWorkCategoriesUsingGet = (
    query?: {
      /** 业务类型。可为父节点类型，查出对应的子节点类型，null则查出所有 */
      type?:
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
    },
    params: RequestParams = {},
  ) =>
    this.request<
      (
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
        | "RADIAL_MANAGE_EXEMPT_RECORD"
      )[],
      void
    >({
      path: `/rsms/businessWorks/workCategories`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags business-work-controller
   * @name GetWorksUsingGet
   * @summary 查询工作（待办、已办都行）
   * @request GET:/rsms/businessWorks/works
   */
  getWorksUsingGet = (
    query?: {
      /** 待办/已办工作 */
      beDone?: boolean;
      /** 业务类型 */
      businessTypes?:
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
      /** 单位名称 */
      companyName?: string;
      /** 批准/备案文号。许可证类业务没用 */
      docNo?: string;
      /** 许可证号 */
      licenseNo?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 放射源编码。许可证类业务没用 */
      sourceCode?: string;
      /**
       * 提交日期-开始
       * @format date
       */
      submitDateBegin?: string;
      /**
       * 提交日期-结束
       * @format date
       */
      submitDateEnd?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type待办工作板Object[], void>({
      path: `/rsms/businessWorks/works`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lcr-company-controller
   * @name GetLcrCompanyInfoUsingGet
   * @summary 许可证延续信息
   * @request GET:/rsms/license/lcrCompany/info
   */
  getLcrCompanyInfoUsingGet = (
    query: {
      /** 延续逻辑主键 */
      lcrCompanyId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type许可证延续信息, void>({
      path: `/rsms/license/lcrCompany/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ler-company-controller
   * @name GetLerCompanyInfoUsingGet
   * @summary 许可证终止信息
   * @request GET:/rsms/license/lerCompany/info
   */
  getLerCompanyInfoUsingGet = (
    query: {
      /** 终止申请逻辑主键 */
      lerCompanyId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type许可证终止信息暂时没看到系统相关信息, void>({
      path: `/rsms/license/lerCompany/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags llr-company-controller
   * @name GetLlrCompanyInfoUsingGet
   * @summary 许可证注销信息
   * @request GET:/rsms/license/llrCompany/info
   */
  getLlrCompanyInfoUsingGet = (
    query: {
      /** 许可证注销逻辑主键 */
      llrCompanyId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type许可证注销信息, void>({
      path: `/rsms/license/llrCompany/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lmr-company-controller
   * @name GetLmrCompanyInfoUsingGet
   * @summary 许可证变更信息
   * @request GET:/rsms/license/lmrCompany/info
   */
  getLmrCompanyInfoUsingGet = (
    query: {
      /** 许可证变更逻辑主键 */
      lmrCompanyId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type许可证变更办理信息, void>({
      path: `/rsms/license/lmrCompany/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name BaseInfoUsingGet1
   * @summary 企业基本信息
   * @request GET:/rsms/license/lrCompanyLog/{companyId}
   */
  baseInfoUsingGet1 = (companyId: string, params: RequestParams = {}) =>
    this.request<Type单位基本信息, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name InstrumentsUsingGet1
   * @summary 监测仪器列表
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/instruments
   */
  instrumentsUsingGet1 = (
    companyId: string,
    query?: {
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVoCompanyInstrumentVo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/instruments`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name NonsealActiveRangeUsingGet1
   * @summary 非密封放射性物质种类和范围
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/nonsealActiveRange
   */
  nonsealActiveRangeUsingGet1 = (
    companyId: string,
    query?: {
      /** 核素编码 */
      nuclideCode?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 场所 */
      siteName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo非密封放射性物质种类和活动方位Vo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/nonsealActiveRange`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name NonsealUseRecordsUsingGet1
   * @summary 非密封放射性物质使用台账
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/nonsealUseRecords
   */
  nonsealUseRecordsUsingGet1 = (
    companyId: string,
    query?: {
      /**
       * 出厂日期-开始日期
       * @format date-time
       */
      leaveFactoryDateBegin?: string;
      /**
       * 出厂日期-结束日期
       * @format date-time
       */
      leaveFactoryDateEnd?: string;
      /** 用途 */
      nonsealUseType?: string;
      /** 核素 */
      nuclideCode?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /**
       * 是否历史台账
       * @default false
       */
      queryHistory?: boolean;
      /** 来源 */
      wherefrom?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo非密封放射性物质使用台账, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/nonsealUseRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name NuclideActiveRangeUsingGet1
   * @summary 放射源活动种类和范围
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/nuclideActiveRange
   */
  nuclideActiveRangeUsingGet1 = (
    companyId: string,
    query?: {
      /** 核素编码 */
      nuclideCode?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 场所 */
      siteName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo放射源活动种类和范围Vo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/nuclideActiveRange`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name NuclideUseRecordsUsingGet1
   * @summary 放射源使用台账
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/nuclideUseRecords
   */
  nuclideUseRecordsUsingGet1 = (
    companyId: string,
    query?: {
      /**
       * 出厂日期-开始日期
       * @format date-time
       */
      leaveFactoryDateBegin?: string;
      /**
       * 出厂日期-结束日期
       * @format date-time
       */
      leaveFactoryDateEnd?: string;
      /** 放射源类别 */
      nuclideCategory?: string;
      /** 核素 */
      nuclideCode?: string;
      /** 用途 */
      nuclideUseType?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /**
       * 是否历史台账
       * @default false
       */
      queryHistory?: boolean;
      /** 场所 */
      siteName?: string;
      /** 放射源编码 */
      sourceCode?: string;
      /** 特殊 */
      specific?: string;
      /** 来源 */
      wherefrom?: string;
      /** 去向, 历史台账时使用 */
      wheretogo?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo放射源使用台账, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/nuclideUseRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name NuclideSaleRecordsUsingGet1
   * @summary 放射源销售台账
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/nudlideSaleRecords
   */
  nuclideSaleRecordsUsingGet1 = (
    companyId: string,
    query?: {
      /**
       * 活度指数
       * @format int32
       */
      activityPower?: number;
      /** 出场活度 */
      leaveFactoryActivity?: number;
      /**
       * 出厂日期-开始日期
       * @format date-time
       */
      leaveFactoryDateBegin?: string;
      /**
       * 出厂日期-结束日期
       * @format date-time
       */
      leaveFactoryDateEnd?: string;
      /** 许可证编码 */
      licenseNo?: string;
      /** 放射源类别 */
      nuclideCategory?: string;
      /** 核素 */
      nuclideCode?: string;
      /** 用途 */
      nuclideUseType?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 批准文号 */
      passNo?: string;
      /**
       * 生产日期-开始
       * @format date-time
       */
      produceDateBegin?: string;
      /**
       * 生产日期-结束
       * @format date-time
       */
      produceDateEnd?: string;
      /**
       * 是否历史台账
       * @default false
       */
      queryHistory?: boolean;
      /** 备案状态 */
      recordState?: string;
      /**
       * 发货日期-开始
       * @format date-time
       */
      sendDateBegin?: string;
      /**
       * 发货日期-结束
       * @format date-time
       */
      sendDateEnd?: string;
      /** 场所 */
      siteName?: string;
      /** 放射源编码 */
      sourceCode?: string;
      /** 特殊 */
      specific?: string;
      /** 来源 */
      wherefrom?: string;
      /** 去向, 历史台账时使用 */
      wheretogo?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo放射源销售台账, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/nudlideSaleRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name ProtectGoodsUsingGet1
   * @summary 防护用品
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/protectGoods
   */
  protectGoodsUsingGet1 = (companyId: string, params: RequestParams = {}) =>
    this.request<Type企业防护用品Vo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/protectGoods`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name RadialActiveRangeUsingGet1
   * @summary 射线装置活动种类和范围
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/radialActiveRange
   */
  radialActiveRangeUsingGet1 = (
    companyId: string,
    query?: {
      /** 装置名称 */
      deviceName?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 场所 */
      siteName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo射线装置活动种类和范围, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/radialActiveRange`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name RadialDepartmentAndMangersUsingGet1
   * @summary 辐射安全管理机构和管理人员
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/radialDepartmentAndMangers
   */
  radialDepartmentAndMangersUsingGet1 = (
    companyId: string,
    query?: {
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type辐射安全管理机构Vo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/radialDepartmentAndMangers`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name RadialWorkersUsingGet1
   * @summary 辐射工作人员
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/radialWorkers
   */
  radialWorkersUsingGet1 = (
    companyId: string,
    query?: {
      /** 姓名 */
      namePattern?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo辐射工作人员Vo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/radialWorkers`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-log-controller
   * @name RadialsetRecordsUsingGet1
   * @summary 射线装置台账
   * @request GET:/rsms/license/lrCompanyLog/{companyId}/radialsetRecords
   */
  radialsetRecordsUsingGet1 = (
    companyId: string,
    query?: {
      /** 类别 */
      category?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 装置名称 */
      siteName?: string;
      /** 装置状态 */
      status?: string;
      /** 用途 */
      useType?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo射线装置台账Vo, void>({
      path: `/rsms/license/lrCompanyLog/${companyId}/radialsetRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name BaseInfoUsingGet
   * @summary 企业基本信息
   * @request GET:/rsms/lrCompany/{companyId}
   */
  baseInfoUsingGet = (companyId: string, params: RequestParams = {}) =>
    this.request<Type单位基本信息, void>({
      path: `/rsms/lrCompany/${companyId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name InstrumentsUsingGet
   * @summary 监测仪器列表
   * @request GET:/rsms/lrCompany/{companyId}/instruments
   */
  instrumentsUsingGet = (
    companyId: string,
    query?: {
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVoCompanyInstrumentVo, void>({
      path: `/rsms/lrCompany/${companyId}/instruments`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name NonsealActiveRangeUsingGet
   * @summary 非密封放射性物质种类和范围
   * @request GET:/rsms/lrCompany/{companyId}/nonsealActiveRange
   */
  nonsealActiveRangeUsingGet = (
    companyId: string,
    query?: {
      /** 核素编码 */
      nuclideCode?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 场所 */
      siteName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo非密封放射性物质种类和活动方位Vo, void>({
      path: `/rsms/lrCompany/${companyId}/nonsealActiveRange`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name NonsealUseRecordsUsingGet
   * @summary 非密封放射性物质使用台账
   * @request GET:/rsms/lrCompany/{companyId}/nonsealUseRecords
   */
  nonsealUseRecordsUsingGet = (
    companyId: string,
    query?: {
      /**
       * 出厂日期-开始日期
       * @format date-time
       */
      leaveFactoryDateBegin?: string;
      /**
       * 出厂日期-结束日期
       * @format date-time
       */
      leaveFactoryDateEnd?: string;
      /** 用途 */
      nonsealUseType?: string;
      /** 核素 */
      nuclideCode?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /**
       * 是否历史台账
       * @default false
       */
      queryHistory?: boolean;
      /** 来源 */
      wherefrom?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo非密封放射性物质使用台账, void>({
      path: `/rsms/lrCompany/${companyId}/nonsealUseRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name NuclideActiveRangeUsingGet
   * @summary 放射源活动种类和范围
   * @request GET:/rsms/lrCompany/{companyId}/nuclideActiveRange
   */
  nuclideActiveRangeUsingGet = (
    companyId: string,
    query?: {
      /** 核素编码 */
      nuclideCode?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 场所 */
      siteName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo放射源活动种类和范围Vo, void>({
      path: `/rsms/lrCompany/${companyId}/nuclideActiveRange`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name NuclideUseRecordsUsingGet
   * @summary 放射源使用台账
   * @request GET:/rsms/lrCompany/{companyId}/nuclideUseRecords
   */
  nuclideUseRecordsUsingGet = (
    companyId: string,
    query?: {
      /**
       * 出厂日期-开始日期
       * @format date-time
       */
      leaveFactoryDateBegin?: string;
      /**
       * 出厂日期-结束日期
       * @format date-time
       */
      leaveFactoryDateEnd?: string;
      /** 放射源类别 */
      nuclideCategory?: string;
      /** 核素 */
      nuclideCode?: string;
      /** 用途 */
      nuclideUseType?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /**
       * 是否历史台账
       * @default false
       */
      queryHistory?: boolean;
      /** 场所 */
      siteName?: string;
      /** 放射源编码 */
      sourceCode?: string;
      /** 特殊 */
      specific?: string;
      /** 来源 */
      wherefrom?: string;
      /** 去向, 历史台账时使用 */
      wheretogo?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo放射源使用台账, void>({
      path: `/rsms/lrCompany/${companyId}/nuclideUseRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name NuclideSaleRecordsUsingGet
   * @summary 放射源销售台账
   * @request GET:/rsms/lrCompany/{companyId}/nudlideSaleRecords
   */
  nuclideSaleRecordsUsingGet = (
    companyId: string,
    query?: {
      /**
       * 活度指数
       * @format int32
       */
      activityPower?: number;
      /** 出场活度 */
      leaveFactoryActivity?: number;
      /**
       * 出厂日期-开始日期
       * @format date-time
       */
      leaveFactoryDateBegin?: string;
      /**
       * 出厂日期-结束日期
       * @format date-time
       */
      leaveFactoryDateEnd?: string;
      /** 许可证编码 */
      licenseNo?: string;
      /** 放射源类别 */
      nuclideCategory?: string;
      /** 核素 */
      nuclideCode?: string;
      /** 用途 */
      nuclideUseType?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 批准文号 */
      passNo?: string;
      /**
       * 生产日期-开始
       * @format date-time
       */
      produceDateBegin?: string;
      /**
       * 生产日期-结束
       * @format date-time
       */
      produceDateEnd?: string;
      /**
       * 是否历史台账
       * @default false
       */
      queryHistory?: boolean;
      /** 备案状态 */
      recordState?: string;
      /**
       * 发货日期-开始
       * @format date-time
       */
      sendDateBegin?: string;
      /**
       * 发货日期-结束
       * @format date-time
       */
      sendDateEnd?: string;
      /** 场所 */
      siteName?: string;
      /** 放射源编码 */
      sourceCode?: string;
      /** 特殊 */
      specific?: string;
      /** 来源 */
      wherefrom?: string;
      /** 去向, 历史台账时使用 */
      wheretogo?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo放射源销售台账, void>({
      path: `/rsms/lrCompany/${companyId}/nudlideSaleRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name ProtectGoodsUsingGet
   * @summary 防护用品
   * @request GET:/rsms/lrCompany/{companyId}/protectGoods
   */
  protectGoodsUsingGet = (companyId: string, params: RequestParams = {}) =>
    this.request<Type企业防护用品Vo, void>({
      path: `/rsms/lrCompany/${companyId}/protectGoods`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name RadialActiveRangeUsingGet
   * @summary 射线装置活动种类和范围
   * @request GET:/rsms/lrCompany/{companyId}/radialActiveRange
   */
  radialActiveRangeUsingGet = (
    companyId: string,
    query?: {
      /** 装置名称 */
      deviceName?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 场所 */
      siteName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo射线装置活动种类和范围, void>({
      path: `/rsms/lrCompany/${companyId}/radialActiveRange`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name RadialDepartmentAndMangersUsingGet
   * @summary 辐射安全管理机构和管理人员
   * @request GET:/rsms/lrCompany/{companyId}/radialDepartmentAndMangers
   */
  radialDepartmentAndMangersUsingGet = (
    companyId: string,
    query?: {
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type辐射安全管理机构Vo, void>({
      path: `/rsms/lrCompany/${companyId}/radialDepartmentAndMangers`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name RadialWorkersUsingGet
   * @summary 辐射工作人员
   * @request GET:/rsms/lrCompany/{companyId}/radialWorkers
   */
  radialWorkersUsingGet = (
    companyId: string,
    query?: {
      /** 姓名 */
      namePattern?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo辐射工作人员Vo, void>({
      path: `/rsms/lrCompany/${companyId}/radialWorkers`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags lr-company-controller
   * @name RadialsetRecordsUsingGet
   * @summary 射线装置台账
   * @request GET:/rsms/lrCompany/{companyId}/radialsetRecords
   */
  radialsetRecordsUsingGet = (
    companyId: string,
    query?: {
      /** 类别 */
      category?: string;
      /** @format int32 */
      pageNo?: number;
      /** @format int32 */
      pageSize?: number;
      /** 装置名称 */
      siteName?: string;
      /** 装置状态 */
      status?: string;
      /** 用途 */
      useType?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageVo射线装置台账Vo, void>({
      path: `/rsms/lrCompany/${companyId}/radialsetRecords`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags req-nuclide-export-controller
   * @name GetNuclideExportInfoUsingGet
   * @summary getNuclideExportInfo
   * @request GET:/rsms/nuclide/reqNuclideExport/info
   */
  getNuclideExportInfoUsingGet = (
    query: {
      /** 出口逻辑主键 */
      exportId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type放射源出口信息, void>({
      path: `/rsms/nuclide/reqNuclideExport/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags req-nuclide-import-controller
   * @name GetNuclideImportInfoUsingGet
   * @summary 获取放射源进口审批信息
   * @request GET:/rsms/nuclide/reqNuclideImport/info
   */
  getNuclideImportInfoUsingGet = (
    query: {
      /** 进口申请id */
      importId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type放射源进口信息, void>({
      path: `/rsms/nuclide/reqNuclideImport/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags req-nuclide-strange-use-controller
   * @name GetNuclideStrangeUseInfoUsingGet
   * @summary 查看跨省异地使用申请信息
   * @request GET:/rsms/nuclide/reqNuclideStrangeUse/info
   */
  getNuclideStrangeUseInfoUsingGet = (
    query?: {
      /** strangeUseId */
      strangeUseId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type跨省异地使用移入地备案, void>({
      path: `/rsms/nuclide/reqNuclideStrangeUse/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags req-nuclide-takeback-controller
   * @name GetNuclideTakebackInfoUsingGet
   * @summary 查看回收申请信息
   * @request GET:/rsms/nuclide/reqNuclideTakeback/info
   */
  getNuclideTakebackInfoUsingGet = (
    query?: {
      /** takebackId */
      takebackId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<NuclideTakebackInfoVo, void>({
      path: `/rsms/nuclide/reqNuclideTakeback/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags req-nuclide-transfer-controller
   * @name GetNuclideTransferInfoUsingGet
   * @summary 放射源转让申请信息
   * @request GET:/rsms/nuclide/reqNuclideTransfer/info
   */
  getNuclideTransferInfoUsingGet = (
    query?: {
      /** transferId */
      transferId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type放射源转让信息, void>({
      path: `/rsms/nuclide/reqNuclideTransfer/info`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags workflow-controller
   * @name GetActInstAndVarListUsingGet
   * @summary 查询流程执行过的节点列表
   * @request GET:/rsms/workflow/actInstList
   */
  getActInstAndVarListUsingGet = (
    query?: {
      /**
       * 流程实例
       * @format int64
       */
      flowInstId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Type流程的活动实例列表事项经过的流程环节[], void>({
      path: `/rsms/workflow/actInstList`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags workflow-controller
   * @name GetActVariableMetaUsingGet
   * @summary 查询需要填写或提交的信息
   * @request GET:/rsms/workflow/actVariableMeta
   */
  getActVariableMetaUsingGet = (
    query: {
      /**
       * 活动节点Id
       * @format int64
       */
      currentActId: number;
      /**
       * 流程id
       * @format int64
       */
      workflowId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApprvFlowvarEntity对象[], void>({
      path: `/rsms/workflow/actVariableMeta`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags workflow-controller
   * @name GetAvailableNextActAndAssigneeUsingPost
   * @summary 查询下一步可选的节点和办理人
   * @request POST:/rsms/workflow/availableNextActAndPerson
   */
  getAvailableNextActAndAssigneeUsingPost = (
    query: {
      /**
       * 当前活动节点
       * @format int64
       */
      currentActId: number;
      /**
       * 流程Id
       * @format int64
       */
      workflowId: number;
    },
    data: Record<string, string>,
    params: RequestParams = {},
  ) =>
    this.request<NextNodeAndAssigneeVo[], void>({
      path: `/rsms/workflow/availableNextActAndPerson`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags workflow-controller
   * @name SubmitActResultUsingPost
   * @summary 提交办理结果
   * @request POST:/rsms/workflow/submitActResult
   */
  submitActResultUsingPost = (
    query: {
      /** 业务的主键 */
      businessKey: string;
      /**
       * 当前的节点类型
       * @format int64
       */
      currentActId: number;
      /**
       * 流程实例id, 受理等开始步骤时没有流程实例可以传null
       * @format int64
       */
      flowInstId?: number;
      /**
       * 下一节活动节点id
       * @format int64
       */
      nextAct: number;
      /** 下一节点办理人，暂时是字符串,后面可能传用户id */
      nextAssignee: string;
      /**
       * 流程类型
       * @format int64
       */
      workflowId: number;
    },
    data: Record<string, string>,
    params: RequestParams = {},
  ) =>
    this.request<boolean, void>({
      path: `/rsms/workflow/submitActResult`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
