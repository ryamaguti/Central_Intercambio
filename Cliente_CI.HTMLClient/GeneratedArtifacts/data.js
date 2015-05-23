/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function AccountLead(entitySet) {
        /// <summary>
        /// Represents the AccountLead entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this accountLead.
        /// </param>
        /// <field name="AccountLeadId" type="String">
        /// Gets or sets the accountLeadId for this accountLead.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this accountLead.
        /// </field>
        /// <field name="accountleads_association_lead" type="msls.application.Lead">
        /// Gets or sets the accountleads_association_lead for this accountLead.
        /// </field>
        /// <field name="accountleads_association_account" type="msls.application.Account">
        /// Gets or sets the accountleads_association_account for this accountLead.
        /// </field>
        /// <field name="details" type="msls.application.AccountLead.Details">
        /// Gets the details for this accountLead.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Account(entitySet) {
        /// <summary>
        /// Represents the Account entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this account.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this account.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this account.
        /// </field>
        /// <field name="Address1_AddressId" type="String">
        /// Gets or sets the address1_AddressId for this account.
        /// </field>
        /// <field name="Address2_AddressId" type="String">
        /// Gets or sets the address2_AddressId for this account.
        /// </field>
        /// <field name="AccountCategoryCode" type="Number">
        /// Gets or sets the accountCategoryCode for this account.
        /// </field>
        /// <field name="CustomerSizeCode" type="Number">
        /// Gets or sets the customerSizeCode for this account.
        /// </field>
        /// <field name="PreferredContactMethodCode" type="Number">
        /// Gets or sets the preferredContactMethodCode for this account.
        /// </field>
        /// <field name="CustomerTypeCode" type="Number">
        /// Gets or sets the customerTypeCode for this account.
        /// </field>
        /// <field name="AccountRatingCode" type="Number">
        /// Gets or sets the accountRatingCode for this account.
        /// </field>
        /// <field name="IndustryCode" type="Number">
        /// Gets or sets the industryCode for this account.
        /// </field>
        /// <field name="TerritoryCode" type="Number">
        /// Gets or sets the territoryCode for this account.
        /// </field>
        /// <field name="AccountClassificationCode" type="Number">
        /// Gets or sets the accountClassificationCode for this account.
        /// </field>
        /// <field name="BusinessTypeCode" type="Number">
        /// Gets or sets the businessTypeCode for this account.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this account.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this account.
        /// </field>
        /// <field name="PaymentTermsCode" type="Number">
        /// Gets or sets the paymentTermsCode for this account.
        /// </field>
        /// <field name="ShippingMethodCode" type="Number">
        /// Gets or sets the shippingMethodCode for this account.
        /// </field>
        /// <field name="ParticipatesInWorkflow" type="Boolean">
        /// Gets or sets the participatesInWorkflow for this account.
        /// </field>
        /// <field name="AccountNumber" type="String">
        /// Gets or sets the accountNumber for this account.
        /// </field>
        /// <field name="Revenue" type="String">
        /// Gets or sets the revenue for this account.
        /// </field>
        /// <field name="NumberOfEmployees" type="Number">
        /// Gets or sets the numberOfEmployees for this account.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this account.
        /// </field>
        /// <field name="SIC" type="String">
        /// Gets or sets the sIC for this account.
        /// </field>
        /// <field name="OwnershipCode" type="Number">
        /// Gets or sets the ownershipCode for this account.
        /// </field>
        /// <field name="MarketCap" type="String">
        /// Gets or sets the marketCap for this account.
        /// </field>
        /// <field name="SharesOutstanding" type="Number">
        /// Gets or sets the sharesOutstanding for this account.
        /// </field>
        /// <field name="TickerSymbol" type="String">
        /// Gets or sets the tickerSymbol for this account.
        /// </field>
        /// <field name="StockExchange" type="String">
        /// Gets or sets the stockExchange for this account.
        /// </field>
        /// <field name="WebSiteURL" type="String">
        /// Gets or sets the webSiteURL for this account.
        /// </field>
        /// <field name="FtpSiteURL" type="String">
        /// Gets or sets the ftpSiteURL for this account.
        /// </field>
        /// <field name="EMailAddress1" type="String">
        /// Gets or sets the eMailAddress1 for this account.
        /// </field>
        /// <field name="EMailAddress2" type="String">
        /// Gets or sets the eMailAddress2 for this account.
        /// </field>
        /// <field name="EMailAddress3" type="String">
        /// Gets or sets the eMailAddress3 for this account.
        /// </field>
        /// <field name="DoNotPhone" type="Boolean">
        /// Gets or sets the doNotPhone for this account.
        /// </field>
        /// <field name="DoNotFax" type="Boolean">
        /// Gets or sets the doNotFax for this account.
        /// </field>
        /// <field name="Telephone1" type="String">
        /// Gets or sets the telephone1 for this account.
        /// </field>
        /// <field name="DoNotEMail" type="Boolean">
        /// Gets or sets the doNotEMail for this account.
        /// </field>
        /// <field name="Telephone2" type="String">
        /// Gets or sets the telephone2 for this account.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this account.
        /// </field>
        /// <field name="Telephone3" type="String">
        /// Gets or sets the telephone3 for this account.
        /// </field>
        /// <field name="DoNotPostalMail" type="Boolean">
        /// Gets or sets the doNotPostalMail for this account.
        /// </field>
        /// <field name="DoNotBulkEMail" type="Boolean">
        /// Gets or sets the doNotBulkEMail for this account.
        /// </field>
        /// <field name="DoNotBulkPostalMail" type="Boolean">
        /// Gets or sets the doNotBulkPostalMail for this account.
        /// </field>
        /// <field name="CreditLimit" type="String">
        /// Gets or sets the creditLimit for this account.
        /// </field>
        /// <field name="CreditOnHold" type="Boolean">
        /// Gets or sets the creditOnHold for this account.
        /// </field>
        /// <field name="IsPrivate" type="Boolean">
        /// Gets or sets the isPrivate for this account.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this account.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this account.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this account.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this account.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this account.
        /// </field>
        /// <field name="Aging30" type="String">
        /// Gets or sets the aging30 for this account.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this account.
        /// </field>
        /// <field name="Aging60" type="String">
        /// Gets or sets the aging60 for this account.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this account.
        /// </field>
        /// <field name="Aging90" type="String">
        /// Gets or sets the aging90 for this account.
        /// </field>
        /// <field name="Address1_AddressTypeCode" type="Number">
        /// Gets or sets the address1_AddressTypeCode for this account.
        /// </field>
        /// <field name="Address1_Name" type="String">
        /// Gets or sets the address1_Name for this account.
        /// </field>
        /// <field name="Address1_PrimaryContactName" type="String">
        /// Gets or sets the address1_PrimaryContactName for this account.
        /// </field>
        /// <field name="Address1_Line1" type="String">
        /// Gets or sets the address1_Line1 for this account.
        /// </field>
        /// <field name="Address1_Line2" type="String">
        /// Gets or sets the address1_Line2 for this account.
        /// </field>
        /// <field name="Address1_Line3" type="String">
        /// Gets or sets the address1_Line3 for this account.
        /// </field>
        /// <field name="Address1_City" type="String">
        /// Gets or sets the address1_City for this account.
        /// </field>
        /// <field name="Address1_StateOrProvince" type="String">
        /// Gets or sets the address1_StateOrProvince for this account.
        /// </field>
        /// <field name="Address1_County" type="String">
        /// Gets or sets the address1_County for this account.
        /// </field>
        /// <field name="Address1_Country" type="String">
        /// Gets or sets the address1_Country for this account.
        /// </field>
        /// <field name="Address1_PostOfficeBox" type="String">
        /// Gets or sets the address1_PostOfficeBox for this account.
        /// </field>
        /// <field name="Address1_PostalCode" type="String">
        /// Gets or sets the address1_PostalCode for this account.
        /// </field>
        /// <field name="Address1_UTCOffset" type="Number">
        /// Gets or sets the address1_UTCOffset for this account.
        /// </field>
        /// <field name="Address1_FreightTermsCode" type="Number">
        /// Gets or sets the address1_FreightTermsCode for this account.
        /// </field>
        /// <field name="Address1_UPSZone" type="String">
        /// Gets or sets the address1_UPSZone for this account.
        /// </field>
        /// <field name="Address1_Latitude" type="Number">
        /// Gets or sets the address1_Latitude for this account.
        /// </field>
        /// <field name="Address1_Telephone1" type="String">
        /// Gets or sets the address1_Telephone1 for this account.
        /// </field>
        /// <field name="Address1_Longitude" type="Number">
        /// Gets or sets the address1_Longitude for this account.
        /// </field>
        /// <field name="Address1_ShippingMethodCode" type="Number">
        /// Gets or sets the address1_ShippingMethodCode for this account.
        /// </field>
        /// <field name="Address1_Telephone2" type="String">
        /// Gets or sets the address1_Telephone2 for this account.
        /// </field>
        /// <field name="Address1_Telephone3" type="String">
        /// Gets or sets the address1_Telephone3 for this account.
        /// </field>
        /// <field name="Address1_Fax" type="String">
        /// Gets or sets the address1_Fax for this account.
        /// </field>
        /// <field name="Address2_AddressTypeCode" type="Number">
        /// Gets or sets the address2_AddressTypeCode for this account.
        /// </field>
        /// <field name="Address2_Name" type="String">
        /// Gets or sets the address2_Name for this account.
        /// </field>
        /// <field name="Address2_PrimaryContactName" type="String">
        /// Gets or sets the address2_PrimaryContactName for this account.
        /// </field>
        /// <field name="Address2_Line1" type="String">
        /// Gets or sets the address2_Line1 for this account.
        /// </field>
        /// <field name="Address2_Line2" type="String">
        /// Gets or sets the address2_Line2 for this account.
        /// </field>
        /// <field name="Address2_Line3" type="String">
        /// Gets or sets the address2_Line3 for this account.
        /// </field>
        /// <field name="Address2_City" type="String">
        /// Gets or sets the address2_City for this account.
        /// </field>
        /// <field name="Address2_StateOrProvince" type="String">
        /// Gets or sets the address2_StateOrProvince for this account.
        /// </field>
        /// <field name="Address2_County" type="String">
        /// Gets or sets the address2_County for this account.
        /// </field>
        /// <field name="Address2_Country" type="String">
        /// Gets or sets the address2_Country for this account.
        /// </field>
        /// <field name="Address2_PostOfficeBox" type="String">
        /// Gets or sets the address2_PostOfficeBox for this account.
        /// </field>
        /// <field name="Address2_PostalCode" type="String">
        /// Gets or sets the address2_PostalCode for this account.
        /// </field>
        /// <field name="Address2_UTCOffset" type="Number">
        /// Gets or sets the address2_UTCOffset for this account.
        /// </field>
        /// <field name="Address2_FreightTermsCode" type="Number">
        /// Gets or sets the address2_FreightTermsCode for this account.
        /// </field>
        /// <field name="Address2_UPSZone" type="String">
        /// Gets or sets the address2_UPSZone for this account.
        /// </field>
        /// <field name="Address2_Latitude" type="Number">
        /// Gets or sets the address2_Latitude for this account.
        /// </field>
        /// <field name="Address2_Telephone1" type="String">
        /// Gets or sets the address2_Telephone1 for this account.
        /// </field>
        /// <field name="Address2_Longitude" type="Number">
        /// Gets or sets the address2_Longitude for this account.
        /// </field>
        /// <field name="Address2_ShippingMethodCode" type="Number">
        /// Gets or sets the address2_ShippingMethodCode for this account.
        /// </field>
        /// <field name="Address2_Telephone2" type="String">
        /// Gets or sets the address2_Telephone2 for this account.
        /// </field>
        /// <field name="Address2_Telephone3" type="String">
        /// Gets or sets the address2_Telephone3 for this account.
        /// </field>
        /// <field name="Address2_Fax" type="String">
        /// Gets or sets the address2_Fax for this account.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this account.
        /// </field>
        /// <field name="PreferredAppointmentDayCode" type="Number">
        /// Gets or sets the preferredAppointmentDayCode for this account.
        /// </field>
        /// <field name="PreferredSystemUserId" type="String">
        /// Gets or sets the preferredSystemUserId for this account.
        /// </field>
        /// <field name="PreferredAppointmentTimeCode" type="Number">
        /// Gets or sets the preferredAppointmentTimeCode for this account.
        /// </field>
        /// <field name="Merged" type="Boolean">
        /// Gets or sets the merged for this account.
        /// </field>
        /// <field name="DoNotSendMM" type="Boolean">
        /// Gets or sets the doNotSendMM for this account.
        /// </field>
        /// <field name="LastUsedInCampaign" type="Date">
        /// Gets or sets the lastUsedInCampaign for this account.
        /// </field>
        /// <field name="PreferredServiceId" type="String">
        /// Gets or sets the preferredServiceId for this account.
        /// </field>
        /// <field name="PreferredEquipmentId" type="String">
        /// Gets or sets the preferredEquipmentId for this account.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this account.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this account.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this account.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this account.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this account.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this account.
        /// </field>
        /// <field name="CreditLimit_Base" type="String">
        /// Gets or sets the creditLimit_Base for this account.
        /// </field>
        /// <field name="Aging30_Base" type="String">
        /// Gets or sets the aging30_Base for this account.
        /// </field>
        /// <field name="Revenue_Base" type="String">
        /// Gets or sets the revenue_Base for this account.
        /// </field>
        /// <field name="Aging90_Base" type="String">
        /// Gets or sets the aging90_Base for this account.
        /// </field>
        /// <field name="MarketCap_Base" type="String">
        /// Gets or sets the marketCap_Base for this account.
        /// </field>
        /// <field name="Aging60_Base" type="String">
        /// Gets or sets the aging60_Base for this account.
        /// </field>
        /// <field name="YomiName" type="String">
        /// Gets or sets the yomiName for this account.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this account.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this account.
        /// </field>
        /// <field name="Quote_customer_accounts" type="msls.EntityCollection" elementType="msls.application.Quote">
        /// Gets the quote_customer_accounts for this account.
        /// </field>
        /// <field name="Order_customer_accounts" type="msls.EntityCollection" elementType="msls.application.SalesOrder">
        /// Gets the order_customer_accounts for this account.
        /// </field>
        /// <field name="team_accounts" type="msls.application.Team">
        /// Gets or sets the team_accounts for this account.
        /// </field>
        /// <field name="territory_accounts" type="msls.application.Territory">
        /// Gets or sets the territory_accounts for this account.
        /// </field>
        /// <field name="Invoice_customer_accounts" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoice_customer_accounts for this account.
        /// </field>
        /// <field name="Lead_customer_accounts" type="msls.EntityCollection" elementType="msls.application.Lead">
        /// Gets the lead_customer_accounts for this account.
        /// </field>
        /// <field name="account_originating_lead" type="msls.application.Lead">
        /// Gets or sets the account_originating_lead for this account.
        /// </field>
        /// <field name="Opportunity_customer_accounts" type="msls.EntityCollection" elementType="msls.application.Opportunity">
        /// Gets the opportunity_customer_accounts for this account.
        /// </field>
        /// <field name="price_level_accounts" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_accounts for this account.
        /// </field>
        /// <field name="accountleads_associations" type="msls.EntityCollection" elementType="msls.application.AccountLead">
        /// Gets the accountleads_associations for this account.
        /// </field>
        /// <field name="account_master_account" type="msls.application.Account">
        /// Gets or sets the account_master_account for this account.
        /// </field>
        /// <field name="account_master_accounts" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the account_master_accounts for this account.
        /// </field>
        /// <field name="account_parent_account" type="msls.application.Account">
        /// Gets or sets the account_parent_account for this account.
        /// </field>
        /// <field name="account_parent_accounts" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the account_parent_accounts for this account.
        /// </field>
        /// <field name="account_primary_contact" type="msls.application.Contact">
        /// Gets or sets the account_primary_contact for this account.
        /// </field>
        /// <field name="Contract_billingcustomer_accounts" type="msls.EntityCollection" elementType="msls.application.Contract">
        /// Gets the contract_billingcustomer_accounts for this account.
        /// </field>
        /// <field name="Contract_customer_accounts" type="msls.EntityCollection" elementType="msls.application.Contract">
        /// Gets the contract_customer_accounts for this account.
        /// </field>
        /// <field name="Contractlineitem_customer_accounts" type="msls.EntityCollection" elementType="msls.application.ContractDetail">
        /// Gets the contractlineitem_customer_accounts for this account.
        /// </field>
        /// <field name="Contact_customer_accounts" type="msls.EntityCollection" elementType="msls.application.Contact">
        /// Gets the contact_customer_accounts for this account.
        /// </field>
        /// <field name="details" type="msls.application.Account.Details">
        /// Gets the details for this account.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Activity(entitySet) {
        /// <summary>
        /// Represents the Activity entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this activity.
        /// </param>
        /// <field name="Subject" type="String">
        /// Gets or sets the subject for this activity.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this activity.
        /// </field>
        /// <field name="ActivityId" type="String">
        /// Gets or sets the activityId for this activity.
        /// </field>
        /// <field name="ActivityTypeCode" type="String">
        /// Gets or sets the activityTypeCode for this activity.
        /// </field>
        /// <field name="ActualDurationMinutes" type="Number">
        /// Gets or sets the actualDurationMinutes for this activity.
        /// </field>
        /// <field name="ActualEnd" type="Date">
        /// Gets or sets the actualEnd for this activity.
        /// </field>
        /// <field name="ActualStart" type="Date">
        /// Gets or sets the actualStart for this activity.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this activity.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this activity.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this activity.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this activity.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this activity.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this activity.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this activity.
        /// </field>
        /// <field name="OwningTeam" type="String">
        /// Gets or sets the owningTeam for this activity.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this activity.
        /// </field>
        /// <field name="ScheduledEnd" type="Date">
        /// Gets or sets the scheduledEnd for this activity.
        /// </field>
        /// <field name="ScheduledStart" type="Date">
        /// Gets or sets the scheduledStart for this activity.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this activity.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this activity.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this activity.
        /// </field>
        /// <field name="Activity_ActivityParties" type="msls.EntityCollection" elementType="msls.application.ActivityParty">
        /// Gets the activity_ActivityParties for this activity.
        /// </field>
        /// <field name="details" type="msls.application.Activity.Details">
        /// Gets the details for this activity.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ActivityParty(entitySet) {
        /// <summary>
        /// Represents the ActivityParty entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this activityParty.
        /// </param>
        /// <field name="AddressUsed" type="String">
        /// Gets or sets the addressUsed for this activityParty.
        /// </field>
        /// <field name="ActivityPartyId" type="String">
        /// Gets or sets the activityPartyId for this activityParty.
        /// </field>
        /// <field name="DoNotEMail" type="Boolean">
        /// Gets or sets the doNotEMail for this activityParty.
        /// </field>
        /// <field name="DoNotFax" type="Boolean">
        /// Gets or sets the doNotFax for this activityParty.
        /// </field>
        /// <field name="DoNotPhone" type="Boolean">
        /// Gets or sets the doNotPhone for this activityParty.
        /// </field>
        /// <field name="DoNotPostalMail" type="Boolean">
        /// Gets or sets the doNotPostalMail for this activityParty.
        /// </field>
        /// <field name="Effort" type="Number">
        /// Gets or sets the effort for this activityParty.
        /// </field>
        /// <field name="ExchangeEntryId" type="String">
        /// Gets or sets the exchangeEntryId for this activityParty.
        /// </field>
        /// <field name="IsPartyDeleted" type="Boolean">
        /// Gets or sets the isPartyDeleted for this activityParty.
        /// </field>
        /// <field name="InstanceTypeCode" type="Number">
        /// Gets or sets the instanceTypeCode for this activityParty.
        /// </field>
        /// <field name="ScheduledEnd" type="Date">
        /// Gets or sets the scheduledEnd for this activityParty.
        /// </field>
        /// <field name="ScheduledStart" type="Date">
        /// Gets or sets the scheduledStart for this activityParty.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this activityParty.
        /// </field>
        /// <field name="ActivityParty_Activity" type="msls.application.Activity">
        /// Gets or sets the activityParty_Activity for this activityParty.
        /// </field>
        /// <field name="details" type="msls.application.ActivityParty.Details">
        /// Gets the details for this activityParty.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Attachment(entitySet) {
        /// <summary>
        /// Represents the Attachment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this attachment.
        /// </param>
        /// <field name="FileName" type="String">
        /// Gets or sets the fileName for this attachment.
        /// </field>
        /// <field name="AttachmentId" type="String">
        /// Gets or sets the attachmentId for this attachment.
        /// </field>
        /// <field name="Body" type="String">
        /// Gets or sets the body for this attachment.
        /// </field>
        /// <field name="Subject" type="String">
        /// Gets or sets the subject for this attachment.
        /// </field>
        /// <field name="FileSize" type="Number">
        /// Gets or sets the fileSize for this attachment.
        /// </field>
        /// <field name="MimeType" type="String">
        /// Gets or sets the mimeType for this attachment.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this attachment.
        /// </field>
        /// <field name="details" type="msls.application.Attachment.Details">
        /// Gets the details for this attachment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CompetitorProduct(entitySet) {
        /// <summary>
        /// Represents the CompetitorProduct entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this competitorProduct.
        /// </param>
        /// <field name="CompetitorProductId" type="String">
        /// Gets or sets the competitorProductId for this competitorProduct.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this competitorProduct.
        /// </field>
        /// <field name="competitorproduct_association_product" type="msls.application.Product">
        /// Gets or sets the competitorproduct_association_product for this competitorProduct.
        /// </field>
        /// <field name="competitorproduct_association_competitor" type="msls.application.Competitor">
        /// Gets or sets the competitorproduct_association_competitor for this competitorProduct.
        /// </field>
        /// <field name="details" type="msls.application.CompetitorProduct.Details">
        /// Gets the details for this competitorProduct.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Competitor(entitySet) {
        /// <summary>
        /// Represents the Competitor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this competitor.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this competitor.
        /// </field>
        /// <field name="CompetitorId" type="String">
        /// Gets or sets the competitorId for this competitor.
        /// </field>
        /// <field name="Address1_AddressId" type="String">
        /// Gets or sets the address1_AddressId for this competitor.
        /// </field>
        /// <field name="Address2_AddressId" type="String">
        /// Gets or sets the address2_AddressId for this competitor.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this competitor.
        /// </field>
        /// <field name="Overview" type="String">
        /// Gets or sets the overview for this competitor.
        /// </field>
        /// <field name="ReferenceInfoUrl" type="String">
        /// Gets or sets the referenceInfoUrl for this competitor.
        /// </field>
        /// <field name="ReportedRevenue" type="String">
        /// Gets or sets the reportedRevenue for this competitor.
        /// </field>
        /// <field name="ReportingQuarter" type="Number">
        /// Gets or sets the reportingQuarter for this competitor.
        /// </field>
        /// <field name="ReportingYear" type="Number">
        /// Gets or sets the reportingYear for this competitor.
        /// </field>
        /// <field name="Strengths" type="String">
        /// Gets or sets the strengths for this competitor.
        /// </field>
        /// <field name="Weaknesses" type="String">
        /// Gets or sets the weaknesses for this competitor.
        /// </field>
        /// <field name="Opportunities" type="String">
        /// Gets or sets the opportunities for this competitor.
        /// </field>
        /// <field name="Threats" type="String">
        /// Gets or sets the threats for this competitor.
        /// </field>
        /// <field name="TickerSymbol" type="String">
        /// Gets or sets the tickerSymbol for this competitor.
        /// </field>
        /// <field name="KeyProduct" type="String">
        /// Gets or sets the keyProduct for this competitor.
        /// </field>
        /// <field name="StockExchange" type="String">
        /// Gets or sets the stockExchange for this competitor.
        /// </field>
        /// <field name="WinPercentage" type="Number">
        /// Gets or sets the winPercentage for this competitor.
        /// </field>
        /// <field name="WebSiteUrl" type="String">
        /// Gets or sets the webSiteUrl for this competitor.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this competitor.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this competitor.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this competitor.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this competitor.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this competitor.
        /// </field>
        /// <field name="Address1_AddressTypeCode" type="Number">
        /// Gets or sets the address1_AddressTypeCode for this competitor.
        /// </field>
        /// <field name="Address1_Name" type="String">
        /// Gets or sets the address1_Name for this competitor.
        /// </field>
        /// <field name="Address1_Line1" type="String">
        /// Gets or sets the address1_Line1 for this competitor.
        /// </field>
        /// <field name="Address1_Line2" type="String">
        /// Gets or sets the address1_Line2 for this competitor.
        /// </field>
        /// <field name="Address1_Line3" type="String">
        /// Gets or sets the address1_Line3 for this competitor.
        /// </field>
        /// <field name="Address1_City" type="String">
        /// Gets or sets the address1_City for this competitor.
        /// </field>
        /// <field name="Address1_StateOrProvince" type="String">
        /// Gets or sets the address1_StateOrProvince for this competitor.
        /// </field>
        /// <field name="Address1_County" type="String">
        /// Gets or sets the address1_County for this competitor.
        /// </field>
        /// <field name="Address1_Country" type="String">
        /// Gets or sets the address1_Country for this competitor.
        /// </field>
        /// <field name="Address1_PostOfficeBox" type="String">
        /// Gets or sets the address1_PostOfficeBox for this competitor.
        /// </field>
        /// <field name="Address1_PostalCode" type="String">
        /// Gets or sets the address1_PostalCode for this competitor.
        /// </field>
        /// <field name="Address1_UTCOffset" type="Number">
        /// Gets or sets the address1_UTCOffset for this competitor.
        /// </field>
        /// <field name="Address1_UPSZone" type="String">
        /// Gets or sets the address1_UPSZone for this competitor.
        /// </field>
        /// <field name="Address1_Latitude" type="Number">
        /// Gets or sets the address1_Latitude for this competitor.
        /// </field>
        /// <field name="Address1_Telephone1" type="String">
        /// Gets or sets the address1_Telephone1 for this competitor.
        /// </field>
        /// <field name="Address1_Longitude" type="Number">
        /// Gets or sets the address1_Longitude for this competitor.
        /// </field>
        /// <field name="Address1_ShippingMethodCode" type="Number">
        /// Gets or sets the address1_ShippingMethodCode for this competitor.
        /// </field>
        /// <field name="Address1_Telephone2" type="String">
        /// Gets or sets the address1_Telephone2 for this competitor.
        /// </field>
        /// <field name="Address1_Telephone3" type="String">
        /// Gets or sets the address1_Telephone3 for this competitor.
        /// </field>
        /// <field name="Address1_Fax" type="String">
        /// Gets or sets the address1_Fax for this competitor.
        /// </field>
        /// <field name="Address2_AddressTypeCode" type="Number">
        /// Gets or sets the address2_AddressTypeCode for this competitor.
        /// </field>
        /// <field name="Address2_Name" type="String">
        /// Gets or sets the address2_Name for this competitor.
        /// </field>
        /// <field name="Address2_Line1" type="String">
        /// Gets or sets the address2_Line1 for this competitor.
        /// </field>
        /// <field name="Address2_Line2" type="String">
        /// Gets or sets the address2_Line2 for this competitor.
        /// </field>
        /// <field name="Address2_Line3" type="String">
        /// Gets or sets the address2_Line3 for this competitor.
        /// </field>
        /// <field name="Address2_City" type="String">
        /// Gets or sets the address2_City for this competitor.
        /// </field>
        /// <field name="Address2_StateOrProvince" type="String">
        /// Gets or sets the address2_StateOrProvince for this competitor.
        /// </field>
        /// <field name="Address2_County" type="String">
        /// Gets or sets the address2_County for this competitor.
        /// </field>
        /// <field name="Address2_Country" type="String">
        /// Gets or sets the address2_Country for this competitor.
        /// </field>
        /// <field name="Address2_PostOfficeBox" type="String">
        /// Gets or sets the address2_PostOfficeBox for this competitor.
        /// </field>
        /// <field name="Address2_PostalCode" type="String">
        /// Gets or sets the address2_PostalCode for this competitor.
        /// </field>
        /// <field name="Address2_UTCOffset" type="Number">
        /// Gets or sets the address2_UTCOffset for this competitor.
        /// </field>
        /// <field name="Address2_UPSZone" type="String">
        /// Gets or sets the address2_UPSZone for this competitor.
        /// </field>
        /// <field name="Address2_Latitude" type="Number">
        /// Gets or sets the address2_Latitude for this competitor.
        /// </field>
        /// <field name="Address2_Telephone1" type="String">
        /// Gets or sets the address2_Telephone1 for this competitor.
        /// </field>
        /// <field name="Address2_Longitude" type="Number">
        /// Gets or sets the address2_Longitude for this competitor.
        /// </field>
        /// <field name="Address2_ShippingMethodCode" type="Number">
        /// Gets or sets the address2_ShippingMethodCode for this competitor.
        /// </field>
        /// <field name="Address2_Telephone2" type="String">
        /// Gets or sets the address2_Telephone2 for this competitor.
        /// </field>
        /// <field name="Address2_Telephone3" type="String">
        /// Gets or sets the address2_Telephone3 for this competitor.
        /// </field>
        /// <field name="Address2_Fax" type="String">
        /// Gets or sets the address2_Fax for this competitor.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this competitor.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this competitor.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this competitor.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this competitor.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this competitor.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this competitor.
        /// </field>
        /// <field name="ReportedRevenue_Base" type="String">
        /// Gets or sets the reportedRevenue_Base for this competitor.
        /// </field>
        /// <field name="YomiName" type="String">
        /// Gets or sets the yomiName for this competitor.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this competitor.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this competitor.
        /// </field>
        /// <field name="leadcompetitors_associations" type="msls.EntityCollection" elementType="msls.application.LeadCompetitor">
        /// Gets the leadcompetitors_associations for this competitor.
        /// </field>
        /// <field name="Competitor_opportunity_activities" type="msls.EntityCollection" elementType="msls.application.OpportunityClose">
        /// Gets the competitor_opportunity_activities for this competitor.
        /// </field>
        /// <field name="opportunitycompetitors_associations" type="msls.EntityCollection" elementType="msls.application.OpportunityCompetitor">
        /// Gets the opportunitycompetitors_associations for this competitor.
        /// </field>
        /// <field name="competitorproduct_associations" type="msls.EntityCollection" elementType="msls.application.CompetitorProduct">
        /// Gets the competitorproduct_associations for this competitor.
        /// </field>
        /// <field name="details" type="msls.application.Competitor.Details">
        /// Gets the details for this competitor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ContactLead(entitySet) {
        /// <summary>
        /// Represents the ContactLead entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this contactLead.
        /// </param>
        /// <field name="ContactLeadId" type="String">
        /// Gets or sets the contactLeadId for this contactLead.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this contactLead.
        /// </field>
        /// <field name="contactleads_association_lead" type="msls.application.Lead">
        /// Gets or sets the contactleads_association_lead for this contactLead.
        /// </field>
        /// <field name="contactleads_association_contact" type="msls.application.Contact">
        /// Gets or sets the contactleads_association_contact for this contactLead.
        /// </field>
        /// <field name="details" type="msls.application.ContactLead.Details">
        /// Gets the details for this contactLead.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ContactOrder(entitySet) {
        /// <summary>
        /// Represents the ContactOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this contactOrder.
        /// </param>
        /// <field name="ContactOrderId" type="String">
        /// Gets or sets the contactOrderId for this contactOrder.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this contactOrder.
        /// </field>
        /// <field name="contactorders_association_salesorder" type="msls.application.SalesOrder">
        /// Gets or sets the contactorders_association_salesorder for this contactOrder.
        /// </field>
        /// <field name="contactorders_association_contact" type="msls.application.Contact">
        /// Gets or sets the contactorders_association_contact for this contactOrder.
        /// </field>
        /// <field name="details" type="msls.application.ContactOrder.Details">
        /// Gets the details for this contactOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Contact(entitySet) {
        /// <summary>
        /// Represents the Contact entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this contact.
        /// </param>
        /// <field name="FullName" type="String">
        /// Gets or sets the fullName for this contact.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this contact.
        /// </field>
        /// <field name="Address1_AddressId" type="String">
        /// Gets or sets the address1_AddressId for this contact.
        /// </field>
        /// <field name="Address2_AddressId" type="String">
        /// Gets or sets the address2_AddressId for this contact.
        /// </field>
        /// <field name="CustomerSizeCode" type="Number">
        /// Gets or sets the customerSizeCode for this contact.
        /// </field>
        /// <field name="CustomerTypeCode" type="Number">
        /// Gets or sets the customerTypeCode for this contact.
        /// </field>
        /// <field name="PreferredContactMethodCode" type="Number">
        /// Gets or sets the preferredContactMethodCode for this contact.
        /// </field>
        /// <field name="LeadSourceCode" type="Number">
        /// Gets or sets the leadSourceCode for this contact.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this contact.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this contact.
        /// </field>
        /// <field name="PaymentTermsCode" type="Number">
        /// Gets or sets the paymentTermsCode for this contact.
        /// </field>
        /// <field name="ShippingMethodCode" type="Number">
        /// Gets or sets the shippingMethodCode for this contact.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this contact.
        /// </field>
        /// <field name="ParticipatesInWorkflow" type="Boolean">
        /// Gets or sets the participatesInWorkflow for this contact.
        /// </field>
        /// <field name="IsBackofficeCustomer" type="Boolean">
        /// Gets or sets the isBackofficeCustomer for this contact.
        /// </field>
        /// <field name="Salutation" type="String">
        /// Gets or sets the salutation for this contact.
        /// </field>
        /// <field name="JobTitle" type="String">
        /// Gets or sets the jobTitle for this contact.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this contact.
        /// </field>
        /// <field name="Department" type="String">
        /// Gets or sets the department for this contact.
        /// </field>
        /// <field name="NickName" type="String">
        /// Gets or sets the nickName for this contact.
        /// </field>
        /// <field name="MiddleName" type="String">
        /// Gets or sets the middleName for this contact.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this contact.
        /// </field>
        /// <field name="Suffix" type="String">
        /// Gets or sets the suffix for this contact.
        /// </field>
        /// <field name="YomiFirstName" type="String">
        /// Gets or sets the yomiFirstName for this contact.
        /// </field>
        /// <field name="YomiMiddleName" type="String">
        /// Gets or sets the yomiMiddleName for this contact.
        /// </field>
        /// <field name="YomiLastName" type="String">
        /// Gets or sets the yomiLastName for this contact.
        /// </field>
        /// <field name="Anniversary" type="Date">
        /// Gets or sets the anniversary for this contact.
        /// </field>
        /// <field name="BirthDate" type="Date">
        /// Gets or sets the birthDate for this contact.
        /// </field>
        /// <field name="GovernmentId" type="String">
        /// Gets or sets the governmentId for this contact.
        /// </field>
        /// <field name="YomiFullName" type="String">
        /// Gets or sets the yomiFullName for this contact.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this contact.
        /// </field>
        /// <field name="EmployeeId" type="String">
        /// Gets or sets the employeeId for this contact.
        /// </field>
        /// <field name="GenderCode" type="Number">
        /// Gets or sets the genderCode for this contact.
        /// </field>
        /// <field name="AnnualIncome" type="String">
        /// Gets or sets the annualIncome for this contact.
        /// </field>
        /// <field name="HasChildrenCode" type="Number">
        /// Gets or sets the hasChildrenCode for this contact.
        /// </field>
        /// <field name="EducationCode" type="Number">
        /// Gets or sets the educationCode for this contact.
        /// </field>
        /// <field name="WebSiteUrl" type="String">
        /// Gets or sets the webSiteUrl for this contact.
        /// </field>
        /// <field name="FamilyStatusCode" type="Number">
        /// Gets or sets the familyStatusCode for this contact.
        /// </field>
        /// <field name="FtpSiteUrl" type="String">
        /// Gets or sets the ftpSiteUrl for this contact.
        /// </field>
        /// <field name="EMailAddress1" type="String">
        /// Gets or sets the eMailAddress1 for this contact.
        /// </field>
        /// <field name="SpousesName" type="String">
        /// Gets or sets the spousesName for this contact.
        /// </field>
        /// <field name="AssistantName" type="String">
        /// Gets or sets the assistantName for this contact.
        /// </field>
        /// <field name="EMailAddress2" type="String">
        /// Gets or sets the eMailAddress2 for this contact.
        /// </field>
        /// <field name="AssistantPhone" type="String">
        /// Gets or sets the assistantPhone for this contact.
        /// </field>
        /// <field name="EMailAddress3" type="String">
        /// Gets or sets the eMailAddress3 for this contact.
        /// </field>
        /// <field name="DoNotPhone" type="Boolean">
        /// Gets or sets the doNotPhone for this contact.
        /// </field>
        /// <field name="ManagerName" type="String">
        /// Gets or sets the managerName for this contact.
        /// </field>
        /// <field name="ManagerPhone" type="String">
        /// Gets or sets the managerPhone for this contact.
        /// </field>
        /// <field name="DoNotFax" type="Boolean">
        /// Gets or sets the doNotFax for this contact.
        /// </field>
        /// <field name="DoNotEMail" type="Boolean">
        /// Gets or sets the doNotEMail for this contact.
        /// </field>
        /// <field name="DoNotPostalMail" type="Boolean">
        /// Gets or sets the doNotPostalMail for this contact.
        /// </field>
        /// <field name="DoNotBulkEMail" type="Boolean">
        /// Gets or sets the doNotBulkEMail for this contact.
        /// </field>
        /// <field name="DoNotBulkPostalMail" type="Boolean">
        /// Gets or sets the doNotBulkPostalMail for this contact.
        /// </field>
        /// <field name="AccountRoleCode" type="Number">
        /// Gets or sets the accountRoleCode for this contact.
        /// </field>
        /// <field name="TerritoryCode" type="Number">
        /// Gets or sets the territoryCode for this contact.
        /// </field>
        /// <field name="IsPrivate" type="Boolean">
        /// Gets or sets the isPrivate for this contact.
        /// </field>
        /// <field name="CreditLimit" type="String">
        /// Gets or sets the creditLimit for this contact.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this contact.
        /// </field>
        /// <field name="CreditOnHold" type="Boolean">
        /// Gets or sets the creditOnHold for this contact.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this contact.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this contact.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this contact.
        /// </field>
        /// <field name="NumberOfChildren" type="Number">
        /// Gets or sets the numberOfChildren for this contact.
        /// </field>
        /// <field name="ChildrensNames" type="String">
        /// Gets or sets the childrensNames for this contact.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this contact.
        /// </field>
        /// <field name="MobilePhone" type="String">
        /// Gets or sets the mobilePhone for this contact.
        /// </field>
        /// <field name="Pager" type="String">
        /// Gets or sets the pager for this contact.
        /// </field>
        /// <field name="Telephone1" type="String">
        /// Gets or sets the telephone1 for this contact.
        /// </field>
        /// <field name="Telephone2" type="String">
        /// Gets or sets the telephone2 for this contact.
        /// </field>
        /// <field name="Telephone3" type="String">
        /// Gets or sets the telephone3 for this contact.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this contact.
        /// </field>
        /// <field name="Aging30" type="String">
        /// Gets or sets the aging30 for this contact.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this contact.
        /// </field>
        /// <field name="Aging60" type="String">
        /// Gets or sets the aging60 for this contact.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this contact.
        /// </field>
        /// <field name="Aging90" type="String">
        /// Gets or sets the aging90 for this contact.
        /// </field>
        /// <field name="ParentContactId" type="String">
        /// Gets or sets the parentContactId for this contact.
        /// </field>
        /// <field name="Address1_AddressTypeCode" type="Number">
        /// Gets or sets the address1_AddressTypeCode for this contact.
        /// </field>
        /// <field name="Address1_Name" type="String">
        /// Gets or sets the address1_Name for this contact.
        /// </field>
        /// <field name="Address1_PrimaryContactName" type="String">
        /// Gets or sets the address1_PrimaryContactName for this contact.
        /// </field>
        /// <field name="Address1_Line1" type="String">
        /// Gets or sets the address1_Line1 for this contact.
        /// </field>
        /// <field name="Address1_Line2" type="String">
        /// Gets or sets the address1_Line2 for this contact.
        /// </field>
        /// <field name="Address1_Line3" type="String">
        /// Gets or sets the address1_Line3 for this contact.
        /// </field>
        /// <field name="Address1_City" type="String">
        /// Gets or sets the address1_City for this contact.
        /// </field>
        /// <field name="Address1_StateOrProvince" type="String">
        /// Gets or sets the address1_StateOrProvince for this contact.
        /// </field>
        /// <field name="Address1_County" type="String">
        /// Gets or sets the address1_County for this contact.
        /// </field>
        /// <field name="Address1_Country" type="String">
        /// Gets or sets the address1_Country for this contact.
        /// </field>
        /// <field name="Address1_PostOfficeBox" type="String">
        /// Gets or sets the address1_PostOfficeBox for this contact.
        /// </field>
        /// <field name="Address1_PostalCode" type="String">
        /// Gets or sets the address1_PostalCode for this contact.
        /// </field>
        /// <field name="Address1_UTCOffset" type="Number">
        /// Gets or sets the address1_UTCOffset for this contact.
        /// </field>
        /// <field name="Address1_FreightTermsCode" type="Number">
        /// Gets or sets the address1_FreightTermsCode for this contact.
        /// </field>
        /// <field name="Address1_UPSZone" type="String">
        /// Gets or sets the address1_UPSZone for this contact.
        /// </field>
        /// <field name="Address1_Latitude" type="Number">
        /// Gets or sets the address1_Latitude for this contact.
        /// </field>
        /// <field name="Address1_Telephone1" type="String">
        /// Gets or sets the address1_Telephone1 for this contact.
        /// </field>
        /// <field name="Address1_Longitude" type="Number">
        /// Gets or sets the address1_Longitude for this contact.
        /// </field>
        /// <field name="Address1_ShippingMethodCode" type="Number">
        /// Gets or sets the address1_ShippingMethodCode for this contact.
        /// </field>
        /// <field name="Address1_Telephone2" type="String">
        /// Gets or sets the address1_Telephone2 for this contact.
        /// </field>
        /// <field name="Address1_Telephone3" type="String">
        /// Gets or sets the address1_Telephone3 for this contact.
        /// </field>
        /// <field name="Address1_Fax" type="String">
        /// Gets or sets the address1_Fax for this contact.
        /// </field>
        /// <field name="Address2_AddressTypeCode" type="Number">
        /// Gets or sets the address2_AddressTypeCode for this contact.
        /// </field>
        /// <field name="Address2_Name" type="String">
        /// Gets or sets the address2_Name for this contact.
        /// </field>
        /// <field name="Address2_PrimaryContactName" type="String">
        /// Gets or sets the address2_PrimaryContactName for this contact.
        /// </field>
        /// <field name="Address2_Line1" type="String">
        /// Gets or sets the address2_Line1 for this contact.
        /// </field>
        /// <field name="Address2_Line2" type="String">
        /// Gets or sets the address2_Line2 for this contact.
        /// </field>
        /// <field name="Address2_Line3" type="String">
        /// Gets or sets the address2_Line3 for this contact.
        /// </field>
        /// <field name="Address2_City" type="String">
        /// Gets or sets the address2_City for this contact.
        /// </field>
        /// <field name="Address2_StateOrProvince" type="String">
        /// Gets or sets the address2_StateOrProvince for this contact.
        /// </field>
        /// <field name="Address2_County" type="String">
        /// Gets or sets the address2_County for this contact.
        /// </field>
        /// <field name="Address2_Country" type="String">
        /// Gets or sets the address2_Country for this contact.
        /// </field>
        /// <field name="Address2_PostOfficeBox" type="String">
        /// Gets or sets the address2_PostOfficeBox for this contact.
        /// </field>
        /// <field name="Address2_PostalCode" type="String">
        /// Gets or sets the address2_PostalCode for this contact.
        /// </field>
        /// <field name="Address2_UTCOffset" type="Number">
        /// Gets or sets the address2_UTCOffset for this contact.
        /// </field>
        /// <field name="Address2_FreightTermsCode" type="Number">
        /// Gets or sets the address2_FreightTermsCode for this contact.
        /// </field>
        /// <field name="Address2_UPSZone" type="String">
        /// Gets or sets the address2_UPSZone for this contact.
        /// </field>
        /// <field name="Address2_Latitude" type="Number">
        /// Gets or sets the address2_Latitude for this contact.
        /// </field>
        /// <field name="Address2_Telephone1" type="String">
        /// Gets or sets the address2_Telephone1 for this contact.
        /// </field>
        /// <field name="Address2_Longitude" type="Number">
        /// Gets or sets the address2_Longitude for this contact.
        /// </field>
        /// <field name="Address2_ShippingMethodCode" type="Number">
        /// Gets or sets the address2_ShippingMethodCode for this contact.
        /// </field>
        /// <field name="Address2_Telephone2" type="String">
        /// Gets or sets the address2_Telephone2 for this contact.
        /// </field>
        /// <field name="Address2_Telephone3" type="String">
        /// Gets or sets the address2_Telephone3 for this contact.
        /// </field>
        /// <field name="Address2_Fax" type="String">
        /// Gets or sets the address2_Fax for this contact.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this contact.
        /// </field>
        /// <field name="PreferredSystemUserId" type="String">
        /// Gets or sets the preferredSystemUserId for this contact.
        /// </field>
        /// <field name="PreferredServiceId" type="String">
        /// Gets or sets the preferredServiceId for this contact.
        /// </field>
        /// <field name="PreferredAppointmentDayCode" type="Number">
        /// Gets or sets the preferredAppointmentDayCode for this contact.
        /// </field>
        /// <field name="PreferredAppointmentTimeCode" type="Number">
        /// Gets or sets the preferredAppointmentTimeCode for this contact.
        /// </field>
        /// <field name="DoNotSendMM" type="Boolean">
        /// Gets or sets the doNotSendMM for this contact.
        /// </field>
        /// <field name="Merged" type="Boolean">
        /// Gets or sets the merged for this contact.
        /// </field>
        /// <field name="ExternalUserIdentifier" type="String">
        /// Gets or sets the externalUserIdentifier for this contact.
        /// </field>
        /// <field name="SubscriptionId" type="String">
        /// Gets or sets the subscriptionId for this contact.
        /// </field>
        /// <field name="PreferredEquipmentId" type="String">
        /// Gets or sets the preferredEquipmentId for this contact.
        /// </field>
        /// <field name="LastUsedInCampaign" type="Date">
        /// Gets or sets the lastUsedInCampaign for this contact.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this contact.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this contact.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this contact.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this contact.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this contact.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this contact.
        /// </field>
        /// <field name="AnnualIncome_Base" type="String">
        /// Gets or sets the annualIncome_Base for this contact.
        /// </field>
        /// <field name="CreditLimit_Base" type="String">
        /// Gets or sets the creditLimit_Base for this contact.
        /// </field>
        /// <field name="Aging60_Base" type="String">
        /// Gets or sets the aging60_Base for this contact.
        /// </field>
        /// <field name="Aging90_Base" type="String">
        /// Gets or sets the aging90_Base for this contact.
        /// </field>
        /// <field name="Aging30_Base" type="String">
        /// Gets or sets the aging30_Base for this contact.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this contact.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this contact.
        /// </field>
        /// <field name="IsAutoCreate" type="Boolean">
        /// Gets or sets the isAutoCreate for this contact.
        /// </field>
        /// <field name="team_contacts" type="msls.application.Team">
        /// Gets or sets the team_contacts for this contact.
        /// </field>
        /// <field name="contact_originating_lead" type="msls.application.Lead">
        /// Gets or sets the contact_originating_lead for this contact.
        /// </field>
        /// <field name="price_level_contacts" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_contacts for this contact.
        /// </field>
        /// <field name="account_primary_contacts" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the account_primary_contacts for this contact.
        /// </field>
        /// <field name="contact_customer_accounts" type="msls.application.Account">
        /// Gets or sets the contact_customer_accounts for this contact.
        /// </field>
        /// <field name="contactleads_associations" type="msls.EntityCollection" elementType="msls.application.ContactLead">
        /// Gets the contactleads_associations for this contact.
        /// </field>
        /// <field name="contactorders_associations" type="msls.EntityCollection" elementType="msls.application.ContactOrder">
        /// Gets the contactorders_associations for this contact.
        /// </field>
        /// <field name="contact_master_contact" type="msls.application.Contact">
        /// Gets or sets the contact_master_contact for this contact.
        /// </field>
        /// <field name="contact_master_contacts" type="msls.EntityCollection" elementType="msls.application.Contact">
        /// Gets the contact_master_contacts for this contact.
        /// </field>
        /// <field name="details" type="msls.application.Contact.Details">
        /// Gets the details for this contact.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ContractDetail(entitySet) {
        /// <summary>
        /// Represents the ContractDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this contractDetail.
        /// </param>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this contractDetail.
        /// </field>
        /// <field name="ContractDetailId" type="String">
        /// Gets or sets the contractDetailId for this contractDetail.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this contractDetail.
        /// </field>
        /// <field name="ServiceAddress" type="String">
        /// Gets or sets the serviceAddress for this contractDetail.
        /// </field>
        /// <field name="ProductSerialNumber" type="String">
        /// Gets or sets the productSerialNumber for this contractDetail.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this contractDetail.
        /// </field>
        /// <field name="LineItemOrder" type="Number">
        /// Gets or sets the lineItemOrder for this contractDetail.
        /// </field>
        /// <field name="ServiceContractUnitsCode" type="Number">
        /// Gets or sets the serviceContractUnitsCode for this contractDetail.
        /// </field>
        /// <field name="InitialQuantity" type="Number">
        /// Gets or sets the initialQuantity for this contractDetail.
        /// </field>
        /// <field name="EffectivityCalendar" type="String">
        /// Gets or sets the effectivityCalendar for this contractDetail.
        /// </field>
        /// <field name="ActiveOn" type="Date">
        /// Gets or sets the activeOn for this contractDetail.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this contractDetail.
        /// </field>
        /// <field name="ExpiresOn" type="Date">
        /// Gets or sets the expiresOn for this contractDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this contractDetail.
        /// </field>
        /// <field name="TotalAllotments" type="Number">
        /// Gets or sets the totalAllotments for this contractDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this contractDetail.
        /// </field>
        /// <field name="Rate" type="String">
        /// Gets or sets the rate for this contractDetail.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this contractDetail.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this contractDetail.
        /// </field>
        /// <field name="Price" type="String">
        /// Gets or sets the price for this contractDetail.
        /// </field>
        /// <field name="Discount" type="String">
        /// Gets or sets the discount for this contractDetail.
        /// </field>
        /// <field name="Net" type="String">
        /// Gets or sets the net for this contractDetail.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this contractDetail.
        /// </field>
        /// <field name="AllotmentsRemaining" type="Number">
        /// Gets or sets the allotmentsRemaining for this contractDetail.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this contractDetail.
        /// </field>
        /// <field name="AllotmentsUsed" type="Number">
        /// Gets or sets the allotmentsUsed for this contractDetail.
        /// </field>
        /// <field name="ContractStateCode" type="Number">
        /// Gets or sets the contractStateCode for this contractDetail.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this contractDetail.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this contractDetail.
        /// </field>
        /// <field name="DiscountPercentage" type="String">
        /// Gets or sets the discountPercentage for this contractDetail.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this contractDetail.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this contractDetail.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this contractDetail.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this contractDetail.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this contractDetail.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this contractDetail.
        /// </field>
        /// <field name="Discount_Base" type="String">
        /// Gets or sets the discount_Base for this contractDetail.
        /// </field>
        /// <field name="Rate_Base" type="String">
        /// Gets or sets the rate_Base for this contractDetail.
        /// </field>
        /// <field name="Price_Base" type="String">
        /// Gets or sets the price_Base for this contractDetail.
        /// </field>
        /// <field name="Net_Base" type="String">
        /// Gets or sets the net_Base for this contractDetail.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this contractDetail.
        /// </field>
        /// <field name="AllotmentsOverage" type="Number">
        /// Gets or sets the allotmentsOverage for this contractDetail.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this contractDetail.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this contractDetail.
        /// </field>
        /// <field name="unit_of_measurement_contract_line_items" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_contract_line_items for this contractDetail.
        /// </field>
        /// <field name="contract_detail_unit_of_measure_schedule" type="msls.application.UoMSchedule">
        /// Gets or sets the contract_detail_unit_of_measure_schedule for this contractDetail.
        /// </field>
        /// <field name="product_contract_line_items" type="msls.application.Product">
        /// Gets or sets the product_contract_line_items for this contractDetail.
        /// </field>
        /// <field name="contractlineitem_customer_accounts" type="msls.application.Account">
        /// Gets or sets the contractlineitem_customer_accounts for this contractDetail.
        /// </field>
        /// <field name="contract_line_items" type="msls.application.Contract">
        /// Gets or sets the contract_line_items for this contractDetail.
        /// </field>
        /// <field name="details" type="msls.application.ContractDetail.Details">
        /// Gets the details for this contractDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Contract(entitySet) {
        /// <summary>
        /// Represents the Contract entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this contract.
        /// </param>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this contract.
        /// </field>
        /// <field name="ContractId" type="String">
        /// Gets or sets the contractId for this contract.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this contract.
        /// </field>
        /// <field name="ContractTemplateId" type="String">
        /// Gets or sets the contractTemplateId for this contract.
        /// </field>
        /// <field name="ContractServiceLevelCode" type="Number">
        /// Gets or sets the contractServiceLevelCode for this contract.
        /// </field>
        /// <field name="ServiceAddress" type="String">
        /// Gets or sets the serviceAddress for this contract.
        /// </field>
        /// <field name="BillToAddress" type="String">
        /// Gets or sets the billToAddress for this contract.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this contract.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this contract.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this contract.
        /// </field>
        /// <field name="BillingAccountId" type="String">
        /// Gets or sets the billingAccountId for this contract.
        /// </field>
        /// <field name="ContractNumber" type="String">
        /// Gets or sets the contractNumber for this contract.
        /// </field>
        /// <field name="BillingContactId" type="String">
        /// Gets or sets the billingContactId for this contract.
        /// </field>
        /// <field name="ActiveOn" type="Date">
        /// Gets or sets the activeOn for this contract.
        /// </field>
        /// <field name="ExpiresOn" type="Date">
        /// Gets or sets the expiresOn for this contract.
        /// </field>
        /// <field name="CancelOn" type="Date">
        /// Gets or sets the cancelOn for this contract.
        /// </field>
        /// <field name="ContractLanguage" type="String">
        /// Gets or sets the contractLanguage for this contract.
        /// </field>
        /// <field name="BillingStartOn" type="Date">
        /// Gets or sets the billingStartOn for this contract.
        /// </field>
        /// <field name="EffectivityCalendar" type="String">
        /// Gets or sets the effectivityCalendar for this contract.
        /// </field>
        /// <field name="BillingEndOn" type="Date">
        /// Gets or sets the billingEndOn for this contract.
        /// </field>
        /// <field name="BillingFrequencyCode" type="Number">
        /// Gets or sets the billingFrequencyCode for this contract.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this contract.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this contract.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this contract.
        /// </field>
        /// <field name="AllotmentTypeCode" type="Number">
        /// Gets or sets the allotmentTypeCode for this contract.
        /// </field>
        /// <field name="UseDiscountAsPercentage" type="Boolean">
        /// Gets or sets the useDiscountAsPercentage for this contract.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this contract.
        /// </field>
        /// <field name="TotalPrice" type="String">
        /// Gets or sets the totalPrice for this contract.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this contract.
        /// </field>
        /// <field name="TotalDiscount" type="String">
        /// Gets or sets the totalDiscount for this contract.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this contract.
        /// </field>
        /// <field name="NetPrice" type="String">
        /// Gets or sets the netPrice for this contract.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this contract.
        /// </field>
        /// <field name="Duration" type="Number">
        /// Gets or sets the duration for this contract.
        /// </field>
        /// <field name="ContractTemplateAbbreviation" type="String">
        /// Gets or sets the contractTemplateAbbreviation for this contract.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this contract.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this contract.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this contract.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this contract.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this contract.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this contract.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this contract.
        /// </field>
        /// <field name="TotalDiscount_Base" type="String">
        /// Gets or sets the totalDiscount_Base for this contract.
        /// </field>
        /// <field name="NetPrice_Base" type="String">
        /// Gets or sets the netPrice_Base for this contract.
        /// </field>
        /// <field name="TotalPrice_Base" type="String">
        /// Gets or sets the totalPrice_Base for this contract.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this contract.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this contract.
        /// </field>
        /// <field name="team_service_contracts" type="msls.application.Team">
        /// Gets or sets the team_service_contracts for this contract.
        /// </field>
        /// <field name="contract_billingcustomer_accounts" type="msls.application.Account">
        /// Gets or sets the contract_billingcustomer_accounts for this contract.
        /// </field>
        /// <field name="contract_customer_accounts" type="msls.application.Account">
        /// Gets or sets the contract_customer_accounts for this contract.
        /// </field>
        /// <field name="contract_originating_contract" type="msls.application.Contract">
        /// Gets or sets the contract_originating_contract for this contract.
        /// </field>
        /// <field name="contract_originating_contracts" type="msls.EntityCollection" elementType="msls.application.Contract">
        /// Gets the contract_originating_contracts for this contract.
        /// </field>
        /// <field name="Contract_line_items" type="msls.EntityCollection" elementType="msls.application.ContractDetail">
        /// Gets the contract_line_items for this contract.
        /// </field>
        /// <field name="details" type="msls.application.Contract.Details">
        /// Gets the details for this contract.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function InvoiceDetail(entitySet) {
        /// <summary>
        /// Represents the InvoiceDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoiceDetail.
        /// </param>
        /// <field name="InvoiceDetailId" type="String">
        /// Gets or sets the invoiceDetailId for this invoiceDetail.
        /// </field>
        /// <field name="SalesRepId" type="String">
        /// Gets or sets the salesRepId for this invoiceDetail.
        /// </field>
        /// <field name="IsProductOverridden" type="Boolean">
        /// Gets or sets the isProductOverridden for this invoiceDetail.
        /// </field>
        /// <field name="LineItemNumber" type="Number">
        /// Gets or sets the lineItemNumber for this invoiceDetail.
        /// </field>
        /// <field name="IsCopied" type="Boolean">
        /// Gets or sets the isCopied for this invoiceDetail.
        /// </field>
        /// <field name="QuantityBackordered" type="String">
        /// Gets or sets the quantityBackordered for this invoiceDetail.
        /// </field>
        /// <field name="ActualDeliveryOn" type="Date">
        /// Gets or sets the actualDeliveryOn for this invoiceDetail.
        /// </field>
        /// <field name="Quantity" type="String">
        /// Gets or sets the quantity for this invoiceDetail.
        /// </field>
        /// <field name="ManualDiscountAmount" type="String">
        /// Gets or sets the manualDiscountAmount for this invoiceDetail.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this invoiceDetail.
        /// </field>
        /// <field name="VolumeDiscountAmount" type="String">
        /// Gets or sets the volumeDiscountAmount for this invoiceDetail.
        /// </field>
        /// <field name="PricePerUnit" type="String">
        /// Gets or sets the pricePerUnit for this invoiceDetail.
        /// </field>
        /// <field name="BaseAmount" type="String">
        /// Gets or sets the baseAmount for this invoiceDetail.
        /// </field>
        /// <field name="QuantityCancelled" type="String">
        /// Gets or sets the quantityCancelled for this invoiceDetail.
        /// </field>
        /// <field name="ShippingTrackingNumber" type="String">
        /// Gets or sets the shippingTrackingNumber for this invoiceDetail.
        /// </field>
        /// <field name="ExtendedAmount" type="String">
        /// Gets or sets the extendedAmount for this invoiceDetail.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this invoiceDetail.
        /// </field>
        /// <field name="IsPriceOverridden" type="Boolean">
        /// Gets or sets the isPriceOverridden for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Name" type="String">
        /// Gets or sets the shipTo_Name for this invoiceDetail.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this invoiceDetail.
        /// </field>
        /// <field name="Tax" type="String">
        /// Gets or sets the tax for this invoiceDetail.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Line1" type="String">
        /// Gets or sets the shipTo_Line1 for this invoiceDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this invoiceDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Line2" type="String">
        /// Gets or sets the shipTo_Line2 for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Line3" type="String">
        /// Gets or sets the shipTo_Line3 for this invoiceDetail.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_City" type="String">
        /// Gets or sets the shipTo_City for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_StateOrProvince" type="String">
        /// Gets or sets the shipTo_StateOrProvince for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Country" type="String">
        /// Gets or sets the shipTo_Country for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_PostalCode" type="String">
        /// Gets or sets the shipTo_PostalCode for this invoiceDetail.
        /// </field>
        /// <field name="WillCall" type="Boolean">
        /// Gets or sets the willCall for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Telephone" type="String">
        /// Gets or sets the shipTo_Telephone for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_Fax" type="String">
        /// Gets or sets the shipTo_Fax for this invoiceDetail.
        /// </field>
        /// <field name="ShipTo_FreightTermsCode" type="Number">
        /// Gets or sets the shipTo_FreightTermsCode for this invoiceDetail.
        /// </field>
        /// <field name="QuantityShipped" type="String">
        /// Gets or sets the quantityShipped for this invoiceDetail.
        /// </field>
        /// <field name="InvoiceStateCode" type="Number">
        /// Gets or sets the invoiceStateCode for this invoiceDetail.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this invoiceDetail.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this invoiceDetail.
        /// </field>
        /// <field name="InvoiceIsPriceLocked" type="Boolean">
        /// Gets or sets the invoiceIsPriceLocked for this invoiceDetail.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this invoiceDetail.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this invoiceDetail.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this invoiceDetail.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this invoiceDetail.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this invoiceDetail.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this invoiceDetail.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this invoiceDetail.
        /// </field>
        /// <field name="VolumeDiscountAmount_Base" type="String">
        /// Gets or sets the volumeDiscountAmount_Base for this invoiceDetail.
        /// </field>
        /// <field name="BaseAmount_Base" type="String">
        /// Gets or sets the baseAmount_Base for this invoiceDetail.
        /// </field>
        /// <field name="PricePerUnit_Base" type="String">
        /// Gets or sets the pricePerUnit_Base for this invoiceDetail.
        /// </field>
        /// <field name="Tax_Base" type="String">
        /// Gets or sets the tax_Base for this invoiceDetail.
        /// </field>
        /// <field name="ExtendedAmount_Base" type="String">
        /// Gets or sets the extendedAmount_Base for this invoiceDetail.
        /// </field>
        /// <field name="ManualDiscountAmount_Base" type="String">
        /// Gets or sets the manualDiscountAmount_Base for this invoiceDetail.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this invoiceDetail.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this invoiceDetail.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this invoiceDetail.
        /// </field>
        /// <field name="unit_of_measurement_invoice_details" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_invoice_details for this invoiceDetail.
        /// </field>
        /// <field name="invoice_details" type="msls.application.Invoice">
        /// Gets or sets the invoice_details for this invoiceDetail.
        /// </field>
        /// <field name="product_invoice_details" type="msls.application.Product">
        /// Gets or sets the product_invoice_details for this invoiceDetail.
        /// </field>
        /// <field name="details" type="msls.application.InvoiceDetail.Details">
        /// Gets the details for this invoiceDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Invoice(entitySet) {
        /// <summary>
        /// Represents the Invoice entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoice.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this invoice.
        /// </field>
        /// <field name="InvoiceId" type="String">
        /// Gets or sets the invoiceId for this invoice.
        /// </field>
        /// <field name="PriorityCode" type="Number">
        /// Gets or sets the priorityCode for this invoice.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this invoice.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this invoice.
        /// </field>
        /// <field name="LastBackofficeSubmit" type="Date">
        /// Gets or sets the lastBackofficeSubmit for this invoice.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this invoice.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this invoice.
        /// </field>
        /// <field name="InvoiceNumber" type="String">
        /// Gets or sets the invoiceNumber for this invoice.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this invoice.
        /// </field>
        /// <field name="DiscountAmount" type="String">
        /// Gets or sets the discountAmount for this invoice.
        /// </field>
        /// <field name="FreightAmount" type="String">
        /// Gets or sets the freightAmount for this invoice.
        /// </field>
        /// <field name="TotalAmount" type="String">
        /// Gets or sets the totalAmount for this invoice.
        /// </field>
        /// <field name="TotalLineItemAmount" type="String">
        /// Gets or sets the totalLineItemAmount for this invoice.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount" type="String">
        /// Gets or sets the totalLineItemDiscountAmount for this invoice.
        /// </field>
        /// <field name="TotalAmountLessFreight" type="String">
        /// Gets or sets the totalAmountLessFreight for this invoice.
        /// </field>
        /// <field name="TotalDiscountAmount" type="String">
        /// Gets or sets the totalDiscountAmount for this invoice.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this invoice.
        /// </field>
        /// <field name="TotalTax" type="String">
        /// Gets or sets the totalTax for this invoice.
        /// </field>
        /// <field name="ShippingMethodCode" type="Number">
        /// Gets or sets the shippingMethodCode for this invoice.
        /// </field>
        /// <field name="PaymentTermsCode" type="Number">
        /// Gets or sets the paymentTermsCode for this invoice.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this invoice.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this invoice.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this invoice.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this invoice.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this invoice.
        /// </field>
        /// <field name="ShipTo_Name" type="String">
        /// Gets or sets the shipTo_Name for this invoice.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this invoice.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this invoice.
        /// </field>
        /// <field name="ShipTo_Line1" type="String">
        /// Gets or sets the shipTo_Line1 for this invoice.
        /// </field>
        /// <field name="ShipTo_Line2" type="String">
        /// Gets or sets the shipTo_Line2 for this invoice.
        /// </field>
        /// <field name="ShipTo_Line3" type="String">
        /// Gets or sets the shipTo_Line3 for this invoice.
        /// </field>
        /// <field name="ShipTo_City" type="String">
        /// Gets or sets the shipTo_City for this invoice.
        /// </field>
        /// <field name="ShipTo_StateOrProvince" type="String">
        /// Gets or sets the shipTo_StateOrProvince for this invoice.
        /// </field>
        /// <field name="ShipTo_Country" type="String">
        /// Gets or sets the shipTo_Country for this invoice.
        /// </field>
        /// <field name="ShipTo_PostalCode" type="String">
        /// Gets or sets the shipTo_PostalCode for this invoice.
        /// </field>
        /// <field name="WillCall" type="Boolean">
        /// Gets or sets the willCall for this invoice.
        /// </field>
        /// <field name="ShipTo_Telephone" type="String">
        /// Gets or sets the shipTo_Telephone for this invoice.
        /// </field>
        /// <field name="BillTo_Name" type="String">
        /// Gets or sets the billTo_Name for this invoice.
        /// </field>
        /// <field name="ShipTo_FreightTermsCode" type="Number">
        /// Gets or sets the shipTo_FreightTermsCode for this invoice.
        /// </field>
        /// <field name="ShipTo_Fax" type="String">
        /// Gets or sets the shipTo_Fax for this invoice.
        /// </field>
        /// <field name="BillTo_Line1" type="String">
        /// Gets or sets the billTo_Line1 for this invoice.
        /// </field>
        /// <field name="BillTo_Line2" type="String">
        /// Gets or sets the billTo_Line2 for this invoice.
        /// </field>
        /// <field name="BillTo_Line3" type="String">
        /// Gets or sets the billTo_Line3 for this invoice.
        /// </field>
        /// <field name="BillTo_City" type="String">
        /// Gets or sets the billTo_City for this invoice.
        /// </field>
        /// <field name="BillTo_StateOrProvince" type="String">
        /// Gets or sets the billTo_StateOrProvince for this invoice.
        /// </field>
        /// <field name="BillTo_Country" type="String">
        /// Gets or sets the billTo_Country for this invoice.
        /// </field>
        /// <field name="BillTo_PostalCode" type="String">
        /// Gets or sets the billTo_PostalCode for this invoice.
        /// </field>
        /// <field name="BillTo_Telephone" type="String">
        /// Gets or sets the billTo_Telephone for this invoice.
        /// </field>
        /// <field name="BillTo_Fax" type="String">
        /// Gets or sets the billTo_Fax for this invoice.
        /// </field>
        /// <field name="DiscountPercentage" type="String">
        /// Gets or sets the discountPercentage for this invoice.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this invoice.
        /// </field>
        /// <field name="IsPriceLocked" type="Boolean">
        /// Gets or sets the isPriceLocked for this invoice.
        /// </field>
        /// <field name="DateDelivered" type="Date">
        /// Gets or sets the dateDelivered for this invoice.
        /// </field>
        /// <field name="DueDate" type="Date">
        /// Gets or sets the dueDate for this invoice.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this invoice.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this invoice.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this invoice.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this invoice.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this invoice.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this invoice.
        /// </field>
        /// <field name="TotalLineItemAmount_Base" type="String">
        /// Gets or sets the totalLineItemAmount_Base for this invoice.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount_Base" type="String">
        /// Gets or sets the totalLineItemDiscountAmount_Base for this invoice.
        /// </field>
        /// <field name="TotalTax_Base" type="String">
        /// Gets or sets the totalTax_Base for this invoice.
        /// </field>
        /// <field name="TotalAmountLessFreight_Base" type="String">
        /// Gets or sets the totalAmountLessFreight_Base for this invoice.
        /// </field>
        /// <field name="DiscountAmount_Base" type="String">
        /// Gets or sets the discountAmount_Base for this invoice.
        /// </field>
        /// <field name="TotalAmount_Base" type="String">
        /// Gets or sets the totalAmount_Base for this invoice.
        /// </field>
        /// <field name="FreightAmount_Base" type="String">
        /// Gets or sets the freightAmount_Base for this invoice.
        /// </field>
        /// <field name="TotalDiscountAmount_Base" type="String">
        /// Gets or sets the totalDiscountAmount_Base for this invoice.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this invoice.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this invoice.
        /// </field>
        /// <field name="order_invoices" type="msls.application.SalesOrder">
        /// Gets or sets the order_invoices for this invoice.
        /// </field>
        /// <field name="team_invoices" type="msls.application.Team">
        /// Gets or sets the team_invoices for this invoice.
        /// </field>
        /// <field name="invoice_customer_accounts" type="msls.application.Account">
        /// Gets or sets the invoice_customer_accounts for this invoice.
        /// </field>
        /// <field name="opportunity_invoices" type="msls.application.Opportunity">
        /// Gets or sets the opportunity_invoices for this invoice.
        /// </field>
        /// <field name="price_level_invoices" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_invoices for this invoice.
        /// </field>
        /// <field name="Invoice_details" type="msls.EntityCollection" elementType="msls.application.InvoiceDetail">
        /// Gets the invoice_details for this invoice.
        /// </field>
        /// <field name="details" type="msls.application.Invoice.Details">
        /// Gets the details for this invoice.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function LeadCompetitor(entitySet) {
        /// <summary>
        /// Represents the LeadCompetitor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this leadCompetitor.
        /// </param>
        /// <field name="LeadCompetitorId" type="String">
        /// Gets or sets the leadCompetitorId for this leadCompetitor.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this leadCompetitor.
        /// </field>
        /// <field name="leadcompetitors_association_lead" type="msls.application.Lead">
        /// Gets or sets the leadcompetitors_association_lead for this leadCompetitor.
        /// </field>
        /// <field name="leadcompetitors_association_competitor" type="msls.application.Competitor">
        /// Gets or sets the leadcompetitors_association_competitor for this leadCompetitor.
        /// </field>
        /// <field name="details" type="msls.application.LeadCompetitor.Details">
        /// Gets the details for this leadCompetitor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function LeadProduct(entitySet) {
        /// <summary>
        /// Represents the LeadProduct entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this leadProduct.
        /// </param>
        /// <field name="LeadProductId" type="String">
        /// Gets or sets the leadProductId for this leadProduct.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this leadProduct.
        /// </field>
        /// <field name="leadproduct_association_lead" type="msls.application.Lead">
        /// Gets or sets the leadproduct_association_lead for this leadProduct.
        /// </field>
        /// <field name="leadproduct_association_product" type="msls.application.Product">
        /// Gets or sets the leadproduct_association_product for this leadProduct.
        /// </field>
        /// <field name="details" type="msls.application.LeadProduct.Details">
        /// Gets the details for this leadProduct.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Lead(entitySet) {
        /// <summary>
        /// Represents the Lead entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this lead.
        /// </param>
        /// <field name="FullName" type="String">
        /// Gets or sets the fullName for this lead.
        /// </field>
        /// <field name="LeadId" type="String">
        /// Gets or sets the leadId for this lead.
        /// </field>
        /// <field name="Address1_AddressId" type="String">
        /// Gets or sets the address1_AddressId for this lead.
        /// </field>
        /// <field name="Address2_AddressId" type="String">
        /// Gets or sets the address2_AddressId for this lead.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this lead.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this lead.
        /// </field>
        /// <field name="LeadSourceCode" type="Number">
        /// Gets or sets the leadSourceCode for this lead.
        /// </field>
        /// <field name="LeadQualityCode" type="Number">
        /// Gets or sets the leadQualityCode for this lead.
        /// </field>
        /// <field name="PriorityCode" type="Number">
        /// Gets or sets the priorityCode for this lead.
        /// </field>
        /// <field name="IndustryCode" type="Number">
        /// Gets or sets the industryCode for this lead.
        /// </field>
        /// <field name="PreferredContactMethodCode" type="Number">
        /// Gets or sets the preferredContactMethodCode for this lead.
        /// </field>
        /// <field name="SalesStageCode" type="Number">
        /// Gets or sets the salesStageCode for this lead.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this lead.
        /// </field>
        /// <field name="Subject" type="String">
        /// Gets or sets the subject for this lead.
        /// </field>
        /// <field name="ParticipatesInWorkflow" type="Boolean">
        /// Gets or sets the participatesInWorkflow for this lead.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this lead.
        /// </field>
        /// <field name="EstimatedValue" type="Number">
        /// Gets or sets the estimatedValue for this lead.
        /// </field>
        /// <field name="EstimatedCloseDate" type="Date">
        /// Gets or sets the estimatedCloseDate for this lead.
        /// </field>
        /// <field name="CompanyName" type="String">
        /// Gets or sets the companyName for this lead.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this lead.
        /// </field>
        /// <field name="MiddleName" type="String">
        /// Gets or sets the middleName for this lead.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this lead.
        /// </field>
        /// <field name="Revenue" type="String">
        /// Gets or sets the revenue for this lead.
        /// </field>
        /// <field name="NumberOfEmployees" type="Number">
        /// Gets or sets the numberOfEmployees for this lead.
        /// </field>
        /// <field name="DoNotPhone" type="Boolean">
        /// Gets or sets the doNotPhone for this lead.
        /// </field>
        /// <field name="SIC" type="String">
        /// Gets or sets the sIC for this lead.
        /// </field>
        /// <field name="DoNotFax" type="Boolean">
        /// Gets or sets the doNotFax for this lead.
        /// </field>
        /// <field name="EMailAddress1" type="String">
        /// Gets or sets the eMailAddress1 for this lead.
        /// </field>
        /// <field name="JobTitle" type="String">
        /// Gets or sets the jobTitle for this lead.
        /// </field>
        /// <field name="Salutation" type="String">
        /// Gets or sets the salutation for this lead.
        /// </field>
        /// <field name="DoNotEMail" type="Boolean">
        /// Gets or sets the doNotEMail for this lead.
        /// </field>
        /// <field name="EMailAddress2" type="String">
        /// Gets or sets the eMailAddress2 for this lead.
        /// </field>
        /// <field name="DoNotPostalMail" type="Boolean">
        /// Gets or sets the doNotPostalMail for this lead.
        /// </field>
        /// <field name="EMailAddress3" type="String">
        /// Gets or sets the eMailAddress3 for this lead.
        /// </field>
        /// <field name="YomiFirstName" type="String">
        /// Gets or sets the yomiFirstName for this lead.
        /// </field>
        /// <field name="WebSiteUrl" type="String">
        /// Gets or sets the webSiteUrl for this lead.
        /// </field>
        /// <field name="Telephone1" type="String">
        /// Gets or sets the telephone1 for this lead.
        /// </field>
        /// <field name="Telephone2" type="String">
        /// Gets or sets the telephone2 for this lead.
        /// </field>
        /// <field name="Telephone3" type="String">
        /// Gets or sets the telephone3 for this lead.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this lead.
        /// </field>
        /// <field name="IsPrivate" type="Boolean">
        /// Gets or sets the isPrivate for this lead.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this lead.
        /// </field>
        /// <field name="YomiMiddleName" type="String">
        /// Gets or sets the yomiMiddleName for this lead.
        /// </field>
        /// <field name="YomiLastName" type="String">
        /// Gets or sets the yomiLastName for this lead.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this lead.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this lead.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this lead.
        /// </field>
        /// <field name="YomiFullName" type="String">
        /// Gets or sets the yomiFullName for this lead.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this lead.
        /// </field>
        /// <field name="MobilePhone" type="String">
        /// Gets or sets the mobilePhone for this lead.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this lead.
        /// </field>
        /// <field name="Pager" type="String">
        /// Gets or sets the pager for this lead.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this lead.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this lead.
        /// </field>
        /// <field name="Address1_AddressTypeCode" type="Number">
        /// Gets or sets the address1_AddressTypeCode for this lead.
        /// </field>
        /// <field name="Address1_Name" type="String">
        /// Gets or sets the address1_Name for this lead.
        /// </field>
        /// <field name="Address1_Line1" type="String">
        /// Gets or sets the address1_Line1 for this lead.
        /// </field>
        /// <field name="Address1_Line2" type="String">
        /// Gets or sets the address1_Line2 for this lead.
        /// </field>
        /// <field name="Address1_Line3" type="String">
        /// Gets or sets the address1_Line3 for this lead.
        /// </field>
        /// <field name="Address1_City" type="String">
        /// Gets or sets the address1_City for this lead.
        /// </field>
        /// <field name="Address1_StateOrProvince" type="String">
        /// Gets or sets the address1_StateOrProvince for this lead.
        /// </field>
        /// <field name="Address1_County" type="String">
        /// Gets or sets the address1_County for this lead.
        /// </field>
        /// <field name="Address1_Country" type="String">
        /// Gets or sets the address1_Country for this lead.
        /// </field>
        /// <field name="Address1_PostOfficeBox" type="String">
        /// Gets or sets the address1_PostOfficeBox for this lead.
        /// </field>
        /// <field name="Address1_PostalCode" type="String">
        /// Gets or sets the address1_PostalCode for this lead.
        /// </field>
        /// <field name="Address1_UTCOffset" type="Number">
        /// Gets or sets the address1_UTCOffset for this lead.
        /// </field>
        /// <field name="Address1_UPSZone" type="String">
        /// Gets or sets the address1_UPSZone for this lead.
        /// </field>
        /// <field name="Address1_Latitude" type="Number">
        /// Gets or sets the address1_Latitude for this lead.
        /// </field>
        /// <field name="Address1_Telephone1" type="String">
        /// Gets or sets the address1_Telephone1 for this lead.
        /// </field>
        /// <field name="Address1_Longitude" type="Number">
        /// Gets or sets the address1_Longitude for this lead.
        /// </field>
        /// <field name="Address1_ShippingMethodCode" type="Number">
        /// Gets or sets the address1_ShippingMethodCode for this lead.
        /// </field>
        /// <field name="Address1_Telephone2" type="String">
        /// Gets or sets the address1_Telephone2 for this lead.
        /// </field>
        /// <field name="Address1_Telephone3" type="String">
        /// Gets or sets the address1_Telephone3 for this lead.
        /// </field>
        /// <field name="Address1_Fax" type="String">
        /// Gets or sets the address1_Fax for this lead.
        /// </field>
        /// <field name="Address2_AddressTypeCode" type="Number">
        /// Gets or sets the address2_AddressTypeCode for this lead.
        /// </field>
        /// <field name="Address2_Name" type="String">
        /// Gets or sets the address2_Name for this lead.
        /// </field>
        /// <field name="Address2_Line1" type="String">
        /// Gets or sets the address2_Line1 for this lead.
        /// </field>
        /// <field name="Address2_Line2" type="String">
        /// Gets or sets the address2_Line2 for this lead.
        /// </field>
        /// <field name="Address2_Line3" type="String">
        /// Gets or sets the address2_Line3 for this lead.
        /// </field>
        /// <field name="Address2_City" type="String">
        /// Gets or sets the address2_City for this lead.
        /// </field>
        /// <field name="Address2_StateOrProvince" type="String">
        /// Gets or sets the address2_StateOrProvince for this lead.
        /// </field>
        /// <field name="Address2_County" type="String">
        /// Gets or sets the address2_County for this lead.
        /// </field>
        /// <field name="Address2_Country" type="String">
        /// Gets or sets the address2_Country for this lead.
        /// </field>
        /// <field name="Address2_PostOfficeBox" type="String">
        /// Gets or sets the address2_PostOfficeBox for this lead.
        /// </field>
        /// <field name="Address2_PostalCode" type="String">
        /// Gets or sets the address2_PostalCode for this lead.
        /// </field>
        /// <field name="Address2_UTCOffset" type="Number">
        /// Gets or sets the address2_UTCOffset for this lead.
        /// </field>
        /// <field name="Address2_UPSZone" type="String">
        /// Gets or sets the address2_UPSZone for this lead.
        /// </field>
        /// <field name="Address2_Latitude" type="Number">
        /// Gets or sets the address2_Latitude for this lead.
        /// </field>
        /// <field name="Address2_Telephone1" type="String">
        /// Gets or sets the address2_Telephone1 for this lead.
        /// </field>
        /// <field name="Address2_Longitude" type="Number">
        /// Gets or sets the address2_Longitude for this lead.
        /// </field>
        /// <field name="Address2_ShippingMethodCode" type="Number">
        /// Gets or sets the address2_ShippingMethodCode for this lead.
        /// </field>
        /// <field name="Address2_Telephone2" type="String">
        /// Gets or sets the address2_Telephone2 for this lead.
        /// </field>
        /// <field name="Address2_Telephone3" type="String">
        /// Gets or sets the address2_Telephone3 for this lead.
        /// </field>
        /// <field name="Address2_Fax" type="String">
        /// Gets or sets the address2_Fax for this lead.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this lead.
        /// </field>
        /// <field name="CampaignId" type="String">
        /// Gets or sets the campaignId for this lead.
        /// </field>
        /// <field name="DoNotSendMM" type="Boolean">
        /// Gets or sets the doNotSendMM for this lead.
        /// </field>
        /// <field name="Merged" type="Boolean">
        /// Gets or sets the merged for this lead.
        /// </field>
        /// <field name="DoNotBulkEMail" type="Boolean">
        /// Gets or sets the doNotBulkEMail for this lead.
        /// </field>
        /// <field name="LastUsedInCampaign" type="Date">
        /// Gets or sets the lastUsedInCampaign for this lead.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this lead.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this lead.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this lead.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this lead.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this lead.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this lead.
        /// </field>
        /// <field name="EstimatedAmount" type="String">
        /// Gets or sets the estimatedAmount for this lead.
        /// </field>
        /// <field name="EstimatedAmount_Base" type="String">
        /// Gets or sets the estimatedAmount_Base for this lead.
        /// </field>
        /// <field name="Revenue_Base" type="String">
        /// Gets or sets the revenue_Base for this lead.
        /// </field>
        /// <field name="YomiCompanyName" type="String">
        /// Gets or sets the yomiCompanyName for this lead.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this lead.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this lead.
        /// </field>
        /// <field name="IsAutoCreate" type="Boolean">
        /// Gets or sets the isAutoCreate for this lead.
        /// </field>
        /// <field name="lead_owning_team" type="msls.application.Team">
        /// Gets or sets the lead_owning_team for this lead.
        /// </field>
        /// <field name="accountleads_associations" type="msls.EntityCollection" elementType="msls.application.AccountLead">
        /// Gets the accountleads_associations for this lead.
        /// </field>
        /// <field name="contactleads_associations" type="msls.EntityCollection" elementType="msls.application.ContactLead">
        /// Gets the contactleads_associations for this lead.
        /// </field>
        /// <field name="leadcompetitors_associations" type="msls.EntityCollection" elementType="msls.application.LeadCompetitor">
        /// Gets the leadcompetitors_associations for this lead.
        /// </field>
        /// <field name="leadproduct_associations" type="msls.EntityCollection" elementType="msls.application.LeadProduct">
        /// Gets the leadproduct_associations for this lead.
        /// </field>
        /// <field name="lead_customer_accounts" type="msls.application.Account">
        /// Gets or sets the lead_customer_accounts for this lead.
        /// </field>
        /// <field name="lead_master_lead" type="msls.application.Lead">
        /// Gets or sets the lead_master_lead for this lead.
        /// </field>
        /// <field name="lead_master_leads" type="msls.EntityCollection" elementType="msls.application.Lead">
        /// Gets the lead_master_leads for this lead.
        /// </field>
        /// <field name="account_originating_leads" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the account_originating_leads for this lead.
        /// </field>
        /// <field name="contact_originating_leads" type="msls.EntityCollection" elementType="msls.application.Contact">
        /// Gets the contact_originating_leads for this lead.
        /// </field>
        /// <field name="opportunity_originating_leads" type="msls.EntityCollection" elementType="msls.application.Opportunity">
        /// Gets the opportunity_originating_leads for this lead.
        /// </field>
        /// <field name="details" type="msls.application.Lead.Details">
        /// Gets the details for this lead.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Opportunity(entitySet) {
        /// <summary>
        /// Represents the Opportunity entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this opportunity.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this opportunity.
        /// </field>
        /// <field name="OpportunityId" type="String">
        /// Gets or sets the opportunityId for this opportunity.
        /// </field>
        /// <field name="OpportunityRatingCode" type="Number">
        /// Gets or sets the opportunityRatingCode for this opportunity.
        /// </field>
        /// <field name="PriorityCode" type="Number">
        /// Gets or sets the priorityCode for this opportunity.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this opportunity.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this opportunity.
        /// </field>
        /// <field name="StepId" type="String">
        /// Gets or sets the stepId for this opportunity.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this opportunity.
        /// </field>
        /// <field name="EstimatedValue" type="String">
        /// Gets or sets the estimatedValue for this opportunity.
        /// </field>
        /// <field name="StepName" type="String">
        /// Gets or sets the stepName for this opportunity.
        /// </field>
        /// <field name="SalesStageCode" type="Number">
        /// Gets or sets the salesStageCode for this opportunity.
        /// </field>
        /// <field name="ParticipatesInWorkflow" type="Boolean">
        /// Gets or sets the participatesInWorkflow for this opportunity.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this opportunity.
        /// </field>
        /// <field name="EstimatedCloseDate" type="Date">
        /// Gets or sets the estimatedCloseDate for this opportunity.
        /// </field>
        /// <field name="CloseProbability" type="Number">
        /// Gets or sets the closeProbability for this opportunity.
        /// </field>
        /// <field name="ActualValue" type="String">
        /// Gets or sets the actualValue for this opportunity.
        /// </field>
        /// <field name="ActualCloseDate" type="Date">
        /// Gets or sets the actualCloseDate for this opportunity.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this opportunity.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this opportunity.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this opportunity.
        /// </field>
        /// <field name="IsPrivate" type="Boolean">
        /// Gets or sets the isPrivate for this opportunity.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this opportunity.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this opportunity.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this opportunity.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this opportunity.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this opportunity.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this opportunity.
        /// </field>
        /// <field name="IsRevenueSystemCalculated" type="Boolean">
        /// Gets or sets the isRevenueSystemCalculated for this opportunity.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this opportunity.
        /// </field>
        /// <field name="CampaignId" type="String">
        /// Gets or sets the campaignId for this opportunity.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this opportunity.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this opportunity.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this opportunity.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this opportunity.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this opportunity.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this opportunity.
        /// </field>
        /// <field name="ActualValue_Base" type="String">
        /// Gets or sets the actualValue_Base for this opportunity.
        /// </field>
        /// <field name="EstimatedValue_Base" type="String">
        /// Gets or sets the estimatedValue_Base for this opportunity.
        /// </field>
        /// <field name="TotalTax" type="String">
        /// Gets or sets the totalTax for this opportunity.
        /// </field>
        /// <field name="DiscountPercentage" type="String">
        /// Gets or sets the discountPercentage for this opportunity.
        /// </field>
        /// <field name="TotalAmount" type="String">
        /// Gets or sets the totalAmount for this opportunity.
        /// </field>
        /// <field name="DiscountAmount" type="String">
        /// Gets or sets the discountAmount for this opportunity.
        /// </field>
        /// <field name="TotalAmountLessFreight" type="String">
        /// Gets or sets the totalAmountLessFreight for this opportunity.
        /// </field>
        /// <field name="FreightAmount" type="String">
        /// Gets or sets the freightAmount for this opportunity.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount" type="String">
        /// Gets or sets the totalLineItemDiscountAmount for this opportunity.
        /// </field>
        /// <field name="TotalLineItemAmount" type="String">
        /// Gets or sets the totalLineItemAmount for this opportunity.
        /// </field>
        /// <field name="TotalDiscountAmount" type="String">
        /// Gets or sets the totalDiscountAmount for this opportunity.
        /// </field>
        /// <field name="TotalLineItemAmount_Base" type="String">
        /// Gets or sets the totalLineItemAmount_Base for this opportunity.
        /// </field>
        /// <field name="TotalDiscountAmount_Base" type="String">
        /// Gets or sets the totalDiscountAmount_Base for this opportunity.
        /// </field>
        /// <field name="TotalTax_Base" type="String">
        /// Gets or sets the totalTax_Base for this opportunity.
        /// </field>
        /// <field name="DiscountAmount_Base" type="String">
        /// Gets or sets the discountAmount_Base for this opportunity.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount_Base" type="String">
        /// Gets or sets the totalLineItemDiscountAmount_Base for this opportunity.
        /// </field>
        /// <field name="TotalAmount_Base" type="String">
        /// Gets or sets the totalAmount_Base for this opportunity.
        /// </field>
        /// <field name="TotalAmountLessFreight_Base" type="String">
        /// Gets or sets the totalAmountLessFreight_Base for this opportunity.
        /// </field>
        /// <field name="FreightAmount_Base" type="String">
        /// Gets or sets the freightAmount_Base for this opportunity.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this opportunity.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this opportunity.
        /// </field>
        /// <field name="Opportunity_quotes" type="msls.EntityCollection" elementType="msls.application.Quote">
        /// Gets the opportunity_quotes for this opportunity.
        /// </field>
        /// <field name="Opportunity_sales_orders" type="msls.EntityCollection" elementType="msls.application.SalesOrder">
        /// Gets the opportunity_sales_orders for this opportunity.
        /// </field>
        /// <field name="team_opportunities" type="msls.application.Team">
        /// Gets or sets the team_opportunities for this opportunity.
        /// </field>
        /// <field name="Opportunity_invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the opportunity_invoices for this opportunity.
        /// </field>
        /// <field name="opportunity_originating_lead" type="msls.application.Lead">
        /// Gets or sets the opportunity_originating_lead for this opportunity.
        /// </field>
        /// <field name="opportunitycompetitors_associations" type="msls.EntityCollection" elementType="msls.application.OpportunityCompetitor">
        /// Gets the opportunitycompetitors_associations for this opportunity.
        /// </field>
        /// <field name="opportunity_customer_accounts" type="msls.application.Account">
        /// Gets or sets the opportunity_customer_accounts for this opportunity.
        /// </field>
        /// <field name="price_level_opportunties" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_opportunties for this opportunity.
        /// </field>
        /// <field name="Opportunity_OpportunityCloses" type="msls.EntityCollection" elementType="msls.application.OpportunityClose">
        /// Gets the opportunity_OpportunityCloses for this opportunity.
        /// </field>
        /// <field name="Product_opportunities" type="msls.EntityCollection" elementType="msls.application.OpportunityProduct">
        /// Gets the product_opportunities for this opportunity.
        /// </field>
        /// <field name="details" type="msls.application.Opportunity.Details">
        /// Gets the details for this opportunity.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OpportunityClose(entitySet) {
        /// <summary>
        /// Represents the OpportunityClose entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this opportunityClose.
        /// </param>
        /// <field name="Subject" type="String">
        /// Gets or sets the subject for this opportunityClose.
        /// </field>
        /// <field name="ActivityId" type="String">
        /// Gets or sets the activityId for this opportunityClose.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this opportunityClose.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this opportunityClose.
        /// </field>
        /// <field name="ActualStart" type="Date">
        /// Gets or sets the actualStart for this opportunityClose.
        /// </field>
        /// <field name="ActualDurationMinutes" type="Number">
        /// Gets or sets the actualDurationMinutes for this opportunityClose.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this opportunityClose.
        /// </field>
        /// <field name="ActualRevenue" type="String">
        /// Gets or sets the actualRevenue for this opportunityClose.
        /// </field>
        /// <field name="ScheduledStart" type="Date">
        /// Gets or sets the scheduledStart for this opportunityClose.
        /// </field>
        /// <field name="IsWorkflowCreated" type="Boolean">
        /// Gets or sets the isWorkflowCreated for this opportunityClose.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this opportunityClose.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this opportunityClose.
        /// </field>
        /// <field name="ServiceId" type="String">
        /// Gets or sets the serviceId for this opportunityClose.
        /// </field>
        /// <field name="IsBilled" type="Boolean">
        /// Gets or sets the isBilled for this opportunityClose.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this opportunityClose.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this opportunityClose.
        /// </field>
        /// <field name="ActualEnd" type="Date">
        /// Gets or sets the actualEnd for this opportunityClose.
        /// </field>
        /// <field name="ScheduledEnd" type="Date">
        /// Gets or sets the scheduledEnd for this opportunityClose.
        /// </field>
        /// <field name="Category" type="String">
        /// Gets or sets the category for this opportunityClose.
        /// </field>
        /// <field name="ScheduledDurationMinutes" type="Number">
        /// Gets or sets the scheduledDurationMinutes for this opportunityClose.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this opportunityClose.
        /// </field>
        /// <field name="Subcategory" type="String">
        /// Gets or sets the subcategory for this opportunityClose.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this opportunityClose.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this opportunityClose.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this opportunityClose.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this opportunityClose.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this opportunityClose.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this opportunityClose.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this opportunityClose.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this opportunityClose.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this opportunityClose.
        /// </field>
        /// <field name="ActualRevenue_Base" type="String">
        /// Gets or sets the actualRevenue_Base for this opportunityClose.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this opportunityClose.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this opportunityClose.
        /// </field>
        /// <field name="ActivityTypeCode" type="String">
        /// Gets or sets the activityTypeCode for this opportunityClose.
        /// </field>
        /// <field name="IsRegularActivity" type="Boolean">
        /// Gets or sets the isRegularActivity for this opportunityClose.
        /// </field>
        /// <field name="team_opportunityclose" type="msls.application.Team">
        /// Gets or sets the team_opportunityclose for this opportunityClose.
        /// </field>
        /// <field name="Opportunity_OpportunityClose" type="msls.application.Opportunity">
        /// Gets or sets the opportunity_OpportunityClose for this opportunityClose.
        /// </field>
        /// <field name="competitor_opportunity_activities" type="msls.application.Competitor">
        /// Gets or sets the competitor_opportunity_activities for this opportunityClose.
        /// </field>
        /// <field name="details" type="msls.application.OpportunityClose.Details">
        /// Gets the details for this opportunityClose.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OpportunityCompetitor(entitySet) {
        /// <summary>
        /// Represents the OpportunityCompetitor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this opportunityCompetitor.
        /// </param>
        /// <field name="OpportunityCompetitorId" type="String">
        /// Gets or sets the opportunityCompetitorId for this opportunityCompetitor.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this opportunityCompetitor.
        /// </field>
        /// <field name="opportunitycompetitors_association_opportunity" type="msls.application.Opportunity">
        /// Gets or sets the opportunitycompetitors_association_opportunity for this opportunityCompetitor.
        /// </field>
        /// <field name="opportunitycompetitors_association_competitor" type="msls.application.Competitor">
        /// Gets or sets the opportunitycompetitors_association_competitor for this opportunityCompetitor.
        /// </field>
        /// <field name="details" type="msls.application.OpportunityCompetitor.Details">
        /// Gets the details for this opportunityCompetitor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OpportunityProduct(entitySet) {
        /// <summary>
        /// Represents the OpportunityProduct entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this opportunityProduct.
        /// </param>
        /// <field name="OpportunityProductId" type="String">
        /// Gets or sets the opportunityProductId for this opportunityProduct.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this opportunityProduct.
        /// </field>
        /// <field name="IsProductOverridden" type="Boolean">
        /// Gets or sets the isProductOverridden for this opportunityProduct.
        /// </field>
        /// <field name="IsPriceOverridden" type="Boolean">
        /// Gets or sets the isPriceOverridden for this opportunityProduct.
        /// </field>
        /// <field name="PricePerUnit" type="String">
        /// Gets or sets the pricePerUnit for this opportunityProduct.
        /// </field>
        /// <field name="BaseAmount" type="String">
        /// Gets or sets the baseAmount for this opportunityProduct.
        /// </field>
        /// <field name="ExtendedAmount" type="String">
        /// Gets or sets the extendedAmount for this opportunityProduct.
        /// </field>
        /// <field name="ManualDiscountAmount" type="String">
        /// Gets or sets the manualDiscountAmount for this opportunityProduct.
        /// </field>
        /// <field name="Quantity" type="String">
        /// Gets or sets the quantity for this opportunityProduct.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this opportunityProduct.
        /// </field>
        /// <field name="VolumeDiscountAmount" type="String">
        /// Gets or sets the volumeDiscountAmount for this opportunityProduct.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this opportunityProduct.
        /// </field>
        /// <field name="Tax" type="String">
        /// Gets or sets the tax for this opportunityProduct.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this opportunityProduct.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this opportunityProduct.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this opportunityProduct.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this opportunityProduct.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this opportunityProduct.
        /// </field>
        /// <field name="OpportunityStateCode" type="Number">
        /// Gets or sets the opportunityStateCode for this opportunityProduct.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this opportunityProduct.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this opportunityProduct.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this opportunityProduct.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this opportunityProduct.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this opportunityProduct.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this opportunityProduct.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this opportunityProduct.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this opportunityProduct.
        /// </field>
        /// <field name="BaseAmount_Base" type="String">
        /// Gets or sets the baseAmount_Base for this opportunityProduct.
        /// </field>
        /// <field name="ManualDiscountAmount_Base" type="String">
        /// Gets or sets the manualDiscountAmount_Base for this opportunityProduct.
        /// </field>
        /// <field name="VolumeDiscountAmount_Base" type="String">
        /// Gets or sets the volumeDiscountAmount_Base for this opportunityProduct.
        /// </field>
        /// <field name="PricePerUnit_Base" type="String">
        /// Gets or sets the pricePerUnit_Base for this opportunityProduct.
        /// </field>
        /// <field name="Tax_Base" type="String">
        /// Gets or sets the tax_Base for this opportunityProduct.
        /// </field>
        /// <field name="ExtendedAmount_Base" type="String">
        /// Gets or sets the extendedAmount_Base for this opportunityProduct.
        /// </field>
        /// <field name="LineItemNumber" type="Number">
        /// Gets or sets the lineItemNumber for this opportunityProduct.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this opportunityProduct.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this opportunityProduct.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this opportunityProduct.
        /// </field>
        /// <field name="unit_of_measurement_opportunity_products" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_opportunity_products for this opportunityProduct.
        /// </field>
        /// <field name="product_opportunities" type="msls.application.Opportunity">
        /// Gets or sets the product_opportunities for this opportunityProduct.
        /// </field>
        /// <field name="opportunity_products" type="msls.application.Product">
        /// Gets or sets the opportunity_products for this opportunityProduct.
        /// </field>
        /// <field name="details" type="msls.application.OpportunityProduct.Details">
        /// Gets the details for this opportunityProduct.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PriceLevel(entitySet) {
        /// <summary>
        /// Represents the PriceLevel entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this priceLevel.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this priceLevel.
        /// </field>
        /// <field name="PriceLevelId" type="String">
        /// Gets or sets the priceLevelId for this priceLevel.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this priceLevel.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this priceLevel.
        /// </field>
        /// <field name="ShippingMethodCode" type="Number">
        /// Gets or sets the shippingMethodCode for this priceLevel.
        /// </field>
        /// <field name="BeginDate" type="Date">
        /// Gets or sets the beginDate for this priceLevel.
        /// </field>
        /// <field name="PaymentMethodCode" type="Number">
        /// Gets or sets the paymentMethodCode for this priceLevel.
        /// </field>
        /// <field name="FreightTermsCode" type="Number">
        /// Gets or sets the freightTermsCode for this priceLevel.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this priceLevel.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this priceLevel.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this priceLevel.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this priceLevel.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this priceLevel.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this priceLevel.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this priceLevel.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this priceLevel.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this priceLevel.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this priceLevel.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this priceLevel.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this priceLevel.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this priceLevel.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this priceLevel.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this priceLevel.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this priceLevel.
        /// </field>
        /// <field name="Price_level_quotes" type="msls.EntityCollection" elementType="msls.application.Quote">
        /// Gets the price_level_quotes for this priceLevel.
        /// </field>
        /// <field name="Price_level_orders" type="msls.EntityCollection" elementType="msls.application.SalesOrder">
        /// Gets the price_level_orders for this priceLevel.
        /// </field>
        /// <field name="Price_level_invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the price_level_invoices for this priceLevel.
        /// </field>
        /// <field name="Price_level_opportunties" type="msls.EntityCollection" elementType="msls.application.Opportunity">
        /// Gets the price_level_opportunties for this priceLevel.
        /// </field>
        /// <field name="Price_level_accounts" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the price_level_accounts for this priceLevel.
        /// </field>
        /// <field name="Price_level_contacts" type="msls.EntityCollection" elementType="msls.application.Contact">
        /// Gets the price_level_contacts for this priceLevel.
        /// </field>
        /// <field name="Price_level_products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the price_level_products for this priceLevel.
        /// </field>
        /// <field name="details" type="msls.application.PriceLevel.Details">
        /// Gets the details for this priceLevel.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Product(entitySet) {
        /// <summary>
        /// Represents the Product entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this product.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this product.
        /// </field>
        /// <field name="ProductId" type="String">
        /// Gets or sets the productId for this product.
        /// </field>
        /// <field name="SubjectId" type="String">
        /// Gets or sets the subjectId for this product.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this product.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this product.
        /// </field>
        /// <field name="ProductTypeCode" type="Number">
        /// Gets or sets the productTypeCode for this product.
        /// </field>
        /// <field name="ProductUrl" type="String">
        /// Gets or sets the productUrl for this product.
        /// </field>
        /// <field name="Price" type="String">
        /// Gets or sets the price for this product.
        /// </field>
        /// <field name="IsKit" type="Boolean">
        /// Gets or sets the isKit for this product.
        /// </field>
        /// <field name="ProductNumber" type="String">
        /// Gets or sets the productNumber for this product.
        /// </field>
        /// <field name="Size" type="String">
        /// Gets or sets the size for this product.
        /// </field>
        /// <field name="CurrentCost" type="String">
        /// Gets or sets the currentCost for this product.
        /// </field>
        /// <field name="StockVolume" type="String">
        /// Gets or sets the stockVolume for this product.
        /// </field>
        /// <field name="StandardCost" type="String">
        /// Gets or sets the standardCost for this product.
        /// </field>
        /// <field name="StockWeight" type="String">
        /// Gets or sets the stockWeight for this product.
        /// </field>
        /// <field name="QuantityDecimal" type="Number">
        /// Gets or sets the quantityDecimal for this product.
        /// </field>
        /// <field name="QuantityOnHand" type="String">
        /// Gets or sets the quantityOnHand for this product.
        /// </field>
        /// <field name="IsStockItem" type="Boolean">
        /// Gets or sets the isStockItem for this product.
        /// </field>
        /// <field name="SupplierName" type="String">
        /// Gets or sets the supplierName for this product.
        /// </field>
        /// <field name="VendorName" type="String">
        /// Gets or sets the vendorName for this product.
        /// </field>
        /// <field name="VendorPartNumber" type="String">
        /// Gets or sets the vendorPartNumber for this product.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this product.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this product.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this product.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this product.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this product.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this product.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this product.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this product.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this product.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this product.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this product.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this product.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this product.
        /// </field>
        /// <field name="CurrentCost_Base" type="String">
        /// Gets or sets the currentCost_Base for this product.
        /// </field>
        /// <field name="Price_Base" type="String">
        /// Gets or sets the price_Base for this product.
        /// </field>
        /// <field name="StandardCost_Base" type="String">
        /// Gets or sets the standardCost_Base for this product.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this product.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this product.
        /// </field>
        /// <field name="unit_of_measurement_products" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_products for this product.
        /// </field>
        /// <field name="unit_of_measurement_schedule_products" type="msls.application.UoMSchedule">
        /// Gets or sets the unit_of_measurement_schedule_products for this product.
        /// </field>
        /// <field name="Product_quote_details" type="msls.EntityCollection" elementType="msls.application.QuoteDetail">
        /// Gets the product_quote_details for this product.
        /// </field>
        /// <field name="Product_order_details" type="msls.EntityCollection" elementType="msls.application.SalesOrderDetail">
        /// Gets the product_order_details for this product.
        /// </field>
        /// <field name="Product_invoice_details" type="msls.EntityCollection" elementType="msls.application.InvoiceDetail">
        /// Gets the product_invoice_details for this product.
        /// </field>
        /// <field name="leadproduct_associations" type="msls.EntityCollection" elementType="msls.application.LeadProduct">
        /// Gets the leadproduct_associations for this product.
        /// </field>
        /// <field name="Opportunity_products" type="msls.EntityCollection" elementType="msls.application.OpportunityProduct">
        /// Gets the opportunity_products for this product.
        /// </field>
        /// <field name="price_level_products" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_products for this product.
        /// </field>
        /// <field name="competitorproduct_associations" type="msls.EntityCollection" elementType="msls.application.CompetitorProduct">
        /// Gets the competitorproduct_associations for this product.
        /// </field>
        /// <field name="Product_contract_line_items" type="msls.EntityCollection" elementType="msls.application.ContractDetail">
        /// Gets the product_contract_line_items for this product.
        /// </field>
        /// <field name="details" type="msls.application.Product.Details">
        /// Gets the details for this product.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Queue(entitySet) {
        /// <summary>
        /// Represents the Queue entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this queue.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this queue.
        /// </field>
        /// <field name="QueueId" type="String">
        /// Gets or sets the queueId for this queue.
        /// </field>
        /// <field name="BusinessUnitId" type="String">
        /// Gets or sets the businessUnitId for this queue.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this queue.
        /// </field>
        /// <field name="EMailAddress" type="String">
        /// Gets or sets the eMailAddress for this queue.
        /// </field>
        /// <field name="PrimaryUserId" type="String">
        /// Gets or sets the primaryUserId for this queue.
        /// </field>
        /// <field name="QueueTypeCode" type="Number">
        /// Gets or sets the queueTypeCode for this queue.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this queue.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this queue.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this queue.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this queue.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this queue.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this queue.
        /// </field>
        /// <field name="IgnoreUnsolicitedEmail" type="Boolean">
        /// Gets or sets the ignoreUnsolicitedEmail for this queue.
        /// </field>
        /// <field name="IsFaxQueue" type="Boolean">
        /// Gets or sets the isFaxQueue for this queue.
        /// </field>
        /// <field name="EmailPassword" type="String">
        /// Gets or sets the emailPassword for this queue.
        /// </field>
        /// <field name="IncomingEmailDeliveryMethod" type="Number">
        /// Gets or sets the incomingEmailDeliveryMethod for this queue.
        /// </field>
        /// <field name="EmailUsername" type="String">
        /// Gets or sets the emailUsername for this queue.
        /// </field>
        /// <field name="OutgoingEmailDeliveryMethod" type="Number">
        /// Gets or sets the outgoingEmailDeliveryMethod for this queue.
        /// </field>
        /// <field name="AllowEmailCredentials" type="Boolean">
        /// Gets or sets the allowEmailCredentials for this queue.
        /// </field>
        /// <field name="IncomingEmailFilteringMethod" type="Number">
        /// Gets or sets the incomingEmailFilteringMethod for this queue.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this queue.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this queue.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this queue.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this queue.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this queue.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this queue.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this queue.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this queue.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this queue.
        /// </field>
        /// <field name="OwningTeam" type="String">
        /// Gets or sets the owningTeam for this queue.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this queue.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this queue.
        /// </field>
        /// <field name="EmailRouterAccessApproval" type="Number">
        /// Gets or sets the emailRouterAccessApproval for this queue.
        /// </field>
        /// <field name="queue_teams" type="msls.EntityCollection" elementType="msls.application.Team">
        /// Gets the queue_teams for this queue.
        /// </field>
        /// <field name="details" type="msls.application.Queue.Details">
        /// Gets the details for this queue.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function QuoteClose(entitySet) {
        /// <summary>
        /// Represents the QuoteClose entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this quoteClose.
        /// </param>
        /// <field name="Subject" type="String">
        /// Gets or sets the subject for this quoteClose.
        /// </field>
        /// <field name="ActivityId" type="String">
        /// Gets or sets the activityId for this quoteClose.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this quoteClose.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this quoteClose.
        /// </field>
        /// <field name="IsWorkflowCreated" type="Boolean">
        /// Gets or sets the isWorkflowCreated for this quoteClose.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this quoteClose.
        /// </field>
        /// <field name="Revision" type="Number">
        /// Gets or sets the revision for this quoteClose.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this quoteClose.
        /// </field>
        /// <field name="Subcategory" type="String">
        /// Gets or sets the subcategory for this quoteClose.
        /// </field>
        /// <field name="IsBilled" type="Boolean">
        /// Gets or sets the isBilled for this quoteClose.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this quoteClose.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this quoteClose.
        /// </field>
        /// <field name="ScheduledEnd" type="Date">
        /// Gets or sets the scheduledEnd for this quoteClose.
        /// </field>
        /// <field name="QuoteNumber" type="String">
        /// Gets or sets the quoteNumber for this quoteClose.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this quoteClose.
        /// </field>
        /// <field name="ServiceId" type="String">
        /// Gets or sets the serviceId for this quoteClose.
        /// </field>
        /// <field name="ActualEnd" type="Date">
        /// Gets or sets the actualEnd for this quoteClose.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this quoteClose.
        /// </field>
        /// <field name="Category" type="String">
        /// Gets or sets the category for this quoteClose.
        /// </field>
        /// <field name="ActualDurationMinutes" type="Number">
        /// Gets or sets the actualDurationMinutes for this quoteClose.
        /// </field>
        /// <field name="ScheduledStart" type="Date">
        /// Gets or sets the scheduledStart for this quoteClose.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this quoteClose.
        /// </field>
        /// <field name="ScheduledDurationMinutes" type="Number">
        /// Gets or sets the scheduledDurationMinutes for this quoteClose.
        /// </field>
        /// <field name="ActualStart" type="Date">
        /// Gets or sets the actualStart for this quoteClose.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this quoteClose.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this quoteClose.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this quoteClose.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this quoteClose.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this quoteClose.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this quoteClose.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this quoteClose.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this quoteClose.
        /// </field>
        /// <field name="ActivityTypeCode" type="String">
        /// Gets or sets the activityTypeCode for this quoteClose.
        /// </field>
        /// <field name="IsRegularActivity" type="Boolean">
        /// Gets or sets the isRegularActivity for this quoteClose.
        /// </field>
        /// <field name="Quote_QuoteClose" type="msls.application.Quote">
        /// Gets or sets the quote_QuoteClose for this quoteClose.
        /// </field>
        /// <field name="team_quoteclose" type="msls.application.Team">
        /// Gets or sets the team_quoteclose for this quoteClose.
        /// </field>
        /// <field name="details" type="msls.application.QuoteClose.Details">
        /// Gets the details for this quoteClose.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function QuoteDetail(entitySet) {
        /// <summary>
        /// Represents the QuoteDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this quoteDetail.
        /// </param>
        /// <field name="QuoteDetailId" type="String">
        /// Gets or sets the quoteDetailId for this quoteDetail.
        /// </field>
        /// <field name="SalesRepId" type="String">
        /// Gets or sets the salesRepId for this quoteDetail.
        /// </field>
        /// <field name="LineItemNumber" type="Number">
        /// Gets or sets the lineItemNumber for this quoteDetail.
        /// </field>
        /// <field name="RequestDeliveryBy" type="Date">
        /// Gets or sets the requestDeliveryBy for this quoteDetail.
        /// </field>
        /// <field name="Quantity" type="String">
        /// Gets or sets the quantity for this quoteDetail.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this quoteDetail.
        /// </field>
        /// <field name="ManualDiscountAmount" type="String">
        /// Gets or sets the manualDiscountAmount for this quoteDetail.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this quoteDetail.
        /// </field>
        /// <field name="VolumeDiscountAmount" type="String">
        /// Gets or sets the volumeDiscountAmount for this quoteDetail.
        /// </field>
        /// <field name="PricePerUnit" type="String">
        /// Gets or sets the pricePerUnit for this quoteDetail.
        /// </field>
        /// <field name="BaseAmount" type="String">
        /// Gets or sets the baseAmount for this quoteDetail.
        /// </field>
        /// <field name="ExtendedAmount" type="String">
        /// Gets or sets the extendedAmount for this quoteDetail.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Name" type="String">
        /// Gets or sets the shipTo_Name for this quoteDetail.
        /// </field>
        /// <field name="IsPriceOverridden" type="Boolean">
        /// Gets or sets the isPriceOverridden for this quoteDetail.
        /// </field>
        /// <field name="Tax" type="String">
        /// Gets or sets the tax for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Line1" type="String">
        /// Gets or sets the shipTo_Line1 for this quoteDetail.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Line2" type="String">
        /// Gets or sets the shipTo_Line2 for this quoteDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this quoteDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Line3" type="String">
        /// Gets or sets the shipTo_Line3 for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_City" type="String">
        /// Gets or sets the shipTo_City for this quoteDetail.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_StateOrProvince" type="String">
        /// Gets or sets the shipTo_StateOrProvince for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Country" type="String">
        /// Gets or sets the shipTo_Country for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_PostalCode" type="String">
        /// Gets or sets the shipTo_PostalCode for this quoteDetail.
        /// </field>
        /// <field name="WillCall" type="Boolean">
        /// Gets or sets the willCall for this quoteDetail.
        /// </field>
        /// <field name="IsProductOverridden" type="Boolean">
        /// Gets or sets the isProductOverridden for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Telephone" type="String">
        /// Gets or sets the shipTo_Telephone for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_Fax" type="String">
        /// Gets or sets the shipTo_Fax for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_FreightTermsCode" type="Number">
        /// Gets or sets the shipTo_FreightTermsCode for this quoteDetail.
        /// </field>
        /// <field name="QuoteStateCode" type="Number">
        /// Gets or sets the quoteStateCode for this quoteDetail.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_AddressId" type="String">
        /// Gets or sets the shipTo_AddressId for this quoteDetail.
        /// </field>
        /// <field name="ShipTo_ContactName" type="String">
        /// Gets or sets the shipTo_ContactName for this quoteDetail.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this quoteDetail.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this quoteDetail.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this quoteDetail.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this quoteDetail.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this quoteDetail.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this quoteDetail.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this quoteDetail.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this quoteDetail.
        /// </field>
        /// <field name="Tax_Base" type="String">
        /// Gets or sets the tax_Base for this quoteDetail.
        /// </field>
        /// <field name="ExtendedAmount_Base" type="String">
        /// Gets or sets the extendedAmount_Base for this quoteDetail.
        /// </field>
        /// <field name="PricePerUnit_Base" type="String">
        /// Gets or sets the pricePerUnit_Base for this quoteDetail.
        /// </field>
        /// <field name="BaseAmount_Base" type="String">
        /// Gets or sets the baseAmount_Base for this quoteDetail.
        /// </field>
        /// <field name="ManualDiscountAmount_Base" type="String">
        /// Gets or sets the manualDiscountAmount_Base for this quoteDetail.
        /// </field>
        /// <field name="VolumeDiscountAmount_Base" type="String">
        /// Gets or sets the volumeDiscountAmount_Base for this quoteDetail.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this quoteDetail.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this quoteDetail.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this quoteDetail.
        /// </field>
        /// <field name="unit_of_measurement_quote_details" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_quote_details for this quoteDetail.
        /// </field>
        /// <field name="quote_details" type="msls.application.Quote">
        /// Gets or sets the quote_details for this quoteDetail.
        /// </field>
        /// <field name="product_quote_details" type="msls.application.Product">
        /// Gets or sets the product_quote_details for this quoteDetail.
        /// </field>
        /// <field name="details" type="msls.application.QuoteDetail.Details">
        /// Gets the details for this quoteDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Quote(entitySet) {
        /// <summary>
        /// Represents the Quote entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this quote.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this quote.
        /// </field>
        /// <field name="QuoteId" type="String">
        /// Gets or sets the quoteId for this quote.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this quote.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this quote.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this quote.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this quote.
        /// </field>
        /// <field name="QuoteNumber" type="String">
        /// Gets or sets the quoteNumber for this quote.
        /// </field>
        /// <field name="RevisionNumber" type="Number">
        /// Gets or sets the revisionNumber for this quote.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this quote.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this quote.
        /// </field>
        /// <field name="DiscountAmount" type="String">
        /// Gets or sets the discountAmount for this quote.
        /// </field>
        /// <field name="FreightAmount" type="String">
        /// Gets or sets the freightAmount for this quote.
        /// </field>
        /// <field name="TotalAmount" type="String">
        /// Gets or sets the totalAmount for this quote.
        /// </field>
        /// <field name="TotalLineItemAmount" type="String">
        /// Gets or sets the totalLineItemAmount for this quote.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount" type="String">
        /// Gets or sets the totalLineItemDiscountAmount for this quote.
        /// </field>
        /// <field name="TotalAmountLessFreight" type="String">
        /// Gets or sets the totalAmountLessFreight for this quote.
        /// </field>
        /// <field name="EffectiveFrom" type="Date">
        /// Gets or sets the effectiveFrom for this quote.
        /// </field>
        /// <field name="TotalTax" type="String">
        /// Gets or sets the totalTax for this quote.
        /// </field>
        /// <field name="TotalDiscountAmount" type="String">
        /// Gets or sets the totalDiscountAmount for this quote.
        /// </field>
        /// <field name="EffectiveTo" type="Date">
        /// Gets or sets the effectiveTo for this quote.
        /// </field>
        /// <field name="ExpiresOn" type="Date">
        /// Gets or sets the expiresOn for this quote.
        /// </field>
        /// <field name="ClosedOn" type="Date">
        /// Gets or sets the closedOn for this quote.
        /// </field>
        /// <field name="RequestDeliveryBy" type="Date">
        /// Gets or sets the requestDeliveryBy for this quote.
        /// </field>
        /// <field name="ShippingMethodCode" type="Number">
        /// Gets or sets the shippingMethodCode for this quote.
        /// </field>
        /// <field name="PaymentTermsCode" type="Number">
        /// Gets or sets the paymentTermsCode for this quote.
        /// </field>
        /// <field name="FreightTermsCode" type="Number">
        /// Gets or sets the freightTermsCode for this quote.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this quote.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this quote.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this quote.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this quote.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this quote.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this quote.
        /// </field>
        /// <field name="ShipTo_Name" type="String">
        /// Gets or sets the shipTo_Name for this quote.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this quote.
        /// </field>
        /// <field name="ShipTo_Line1" type="String">
        /// Gets or sets the shipTo_Line1 for this quote.
        /// </field>
        /// <field name="ShipTo_Line2" type="String">
        /// Gets or sets the shipTo_Line2 for this quote.
        /// </field>
        /// <field name="ShipTo_Line3" type="String">
        /// Gets or sets the shipTo_Line3 for this quote.
        /// </field>
        /// <field name="ShipTo_City" type="String">
        /// Gets or sets the shipTo_City for this quote.
        /// </field>
        /// <field name="ShipTo_StateOrProvince" type="String">
        /// Gets or sets the shipTo_StateOrProvince for this quote.
        /// </field>
        /// <field name="ShipTo_Country" type="String">
        /// Gets or sets the shipTo_Country for this quote.
        /// </field>
        /// <field name="ShipTo_PostalCode" type="String">
        /// Gets or sets the shipTo_PostalCode for this quote.
        /// </field>
        /// <field name="WillCall" type="Boolean">
        /// Gets or sets the willCall for this quote.
        /// </field>
        /// <field name="ShipTo_Telephone" type="String">
        /// Gets or sets the shipTo_Telephone for this quote.
        /// </field>
        /// <field name="BillTo_Name" type="String">
        /// Gets or sets the billTo_Name for this quote.
        /// </field>
        /// <field name="ShipTo_FreightTermsCode" type="Number">
        /// Gets or sets the shipTo_FreightTermsCode for this quote.
        /// </field>
        /// <field name="ShipTo_Fax" type="String">
        /// Gets or sets the shipTo_Fax for this quote.
        /// </field>
        /// <field name="BillTo_Line1" type="String">
        /// Gets or sets the billTo_Line1 for this quote.
        /// </field>
        /// <field name="BillTo_Line2" type="String">
        /// Gets or sets the billTo_Line2 for this quote.
        /// </field>
        /// <field name="BillTo_Line3" type="String">
        /// Gets or sets the billTo_Line3 for this quote.
        /// </field>
        /// <field name="BillTo_City" type="String">
        /// Gets or sets the billTo_City for this quote.
        /// </field>
        /// <field name="BillTo_StateOrProvince" type="String">
        /// Gets or sets the billTo_StateOrProvince for this quote.
        /// </field>
        /// <field name="BillTo_Country" type="String">
        /// Gets or sets the billTo_Country for this quote.
        /// </field>
        /// <field name="BillTo_PostalCode" type="String">
        /// Gets or sets the billTo_PostalCode for this quote.
        /// </field>
        /// <field name="BillTo_Telephone" type="String">
        /// Gets or sets the billTo_Telephone for this quote.
        /// </field>
        /// <field name="BillTo_Fax" type="String">
        /// Gets or sets the billTo_Fax for this quote.
        /// </field>
        /// <field name="DiscountPercentage" type="String">
        /// Gets or sets the discountPercentage for this quote.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this quote.
        /// </field>
        /// <field name="CampaignId" type="String">
        /// Gets or sets the campaignId for this quote.
        /// </field>
        /// <field name="ShipTo_AddressId" type="String">
        /// Gets or sets the shipTo_AddressId for this quote.
        /// </field>
        /// <field name="ShipTo_ContactName" type="String">
        /// Gets or sets the shipTo_ContactName for this quote.
        /// </field>
        /// <field name="BillTo_AddressId" type="String">
        /// Gets or sets the billTo_AddressId for this quote.
        /// </field>
        /// <field name="BillTo_ContactName" type="String">
        /// Gets or sets the billTo_ContactName for this quote.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this quote.
        /// </field>
        /// <field name="UniqueDscId" type="String">
        /// Gets or sets the uniqueDscId for this quote.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this quote.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this quote.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this quote.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this quote.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this quote.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount_Base" type="String">
        /// Gets or sets the totalLineItemDiscountAmount_Base for this quote.
        /// </field>
        /// <field name="TotalAmountLessFreight_Base" type="String">
        /// Gets or sets the totalAmountLessFreight_Base for this quote.
        /// </field>
        /// <field name="DiscountAmount_Base" type="String">
        /// Gets or sets the discountAmount_Base for this quote.
        /// </field>
        /// <field name="FreightAmount_Base" type="String">
        /// Gets or sets the freightAmount_Base for this quote.
        /// </field>
        /// <field name="TotalAmount_Base" type="String">
        /// Gets or sets the totalAmount_Base for this quote.
        /// </field>
        /// <field name="TotalDiscountAmount_Base" type="String">
        /// Gets or sets the totalDiscountAmount_Base for this quote.
        /// </field>
        /// <field name="TotalTax_Base" type="String">
        /// Gets or sets the totalTax_Base for this quote.
        /// </field>
        /// <field name="TotalLineItemAmount_Base" type="String">
        /// Gets or sets the totalLineItemAmount_Base for this quote.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this quote.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this quote.
        /// </field>
        /// <field name="quote_customer_accounts" type="msls.application.Account">
        /// Gets or sets the quote_customer_accounts for this quote.
        /// </field>
        /// <field name="opportunity_quotes" type="msls.application.Opportunity">
        /// Gets or sets the opportunity_quotes for this quote.
        /// </field>
        /// <field name="team_quotes" type="msls.application.Team">
        /// Gets or sets the team_quotes for this quote.
        /// </field>
        /// <field name="price_level_quotes" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_quotes for this quote.
        /// </field>
        /// <field name="Quote_QuoteCloses" type="msls.EntityCollection" elementType="msls.application.QuoteClose">
        /// Gets the quote_QuoteCloses for this quote.
        /// </field>
        /// <field name="Quote_details" type="msls.EntityCollection" elementType="msls.application.QuoteDetail">
        /// Gets the quote_details for this quote.
        /// </field>
        /// <field name="Quote_orders" type="msls.EntityCollection" elementType="msls.application.SalesOrder">
        /// Gets the quote_orders for this quote.
        /// </field>
        /// <field name="details" type="msls.application.Quote.Details">
        /// Gets the details for this quote.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Role(entitySet) {
        /// <summary>
        /// Represents the Role entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this role.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this role.
        /// </field>
        /// <field name="RoleId" type="String">
        /// Gets or sets the roleId for this role.
        /// </field>
        /// <field name="RoleTemplateId" type="String">
        /// Gets or sets the roleTemplateId for this role.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this role.
        /// </field>
        /// <field name="BusinessUnitId" type="String">
        /// Gets or sets the businessUnitId for this role.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this role.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this role.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this role.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this role.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this role.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this role.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this role.
        /// </field>
        /// <field name="OverwriteTime" type="Date">
        /// Gets or sets the overwriteTime for this role.
        /// </field>
        /// <field name="SupportingSolutionId" type="String">
        /// Gets or sets the supportingSolutionId for this role.
        /// </field>
        /// <field name="ComponentState" type="Number">
        /// Gets or sets the componentState for this role.
        /// </field>
        /// <field name="SolutionId" type="String">
        /// Gets or sets the solutionId for this role.
        /// </field>
        /// <field name="RoleIdUnique" type="String">
        /// Gets or sets the roleIdUnique for this role.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this role.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this role.
        /// </field>
        /// <field name="IsManaged" type="Boolean">
        /// Gets or sets the isManaged for this role.
        /// </field>
        /// <field name="IsCustomizable" type="Boolean">
        /// Gets or sets the isCustomizable for this role.
        /// </field>
        /// <field name="teamroles_associations" type="msls.EntityCollection" elementType="msls.application.TeamRole">
        /// Gets the teamroles_associations for this role.
        /// </field>
        /// <field name="role_parent_role" type="msls.application.Role">
        /// Gets or sets the role_parent_role for this role.
        /// </field>
        /// <field name="role_parent_roles" type="msls.EntityCollection" elementType="msls.application.Role">
        /// Gets the role_parent_roles for this role.
        /// </field>
        /// <field name="role_parent_root_role" type="msls.application.Role">
        /// Gets or sets the role_parent_root_role for this role.
        /// </field>
        /// <field name="role_parent_root_roles" type="msls.EntityCollection" elementType="msls.application.Role">
        /// Gets the role_parent_root_roles for this role.
        /// </field>
        /// <field name="details" type="msls.application.Role.Details">
        /// Gets the details for this role.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SalesOrderDetail(entitySet) {
        /// <summary>
        /// Represents the SalesOrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this salesOrderDetail.
        /// </param>
        /// <field name="SalesOrderDetailId" type="String">
        /// Gets or sets the salesOrderDetailId for this salesOrderDetail.
        /// </field>
        /// <field name="SalesRepId" type="String">
        /// Gets or sets the salesRepId for this salesOrderDetail.
        /// </field>
        /// <field name="IsProductOverridden" type="Boolean">
        /// Gets or sets the isProductOverridden for this salesOrderDetail.
        /// </field>
        /// <field name="IsCopied" type="Boolean">
        /// Gets or sets the isCopied for this salesOrderDetail.
        /// </field>
        /// <field name="QuantityShipped" type="String">
        /// Gets or sets the quantityShipped for this salesOrderDetail.
        /// </field>
        /// <field name="LineItemNumber" type="Number">
        /// Gets or sets the lineItemNumber for this salesOrderDetail.
        /// </field>
        /// <field name="QuantityBackordered" type="String">
        /// Gets or sets the quantityBackordered for this salesOrderDetail.
        /// </field>
        /// <field name="QuantityCancelled" type="String">
        /// Gets or sets the quantityCancelled for this salesOrderDetail.
        /// </field>
        /// <field name="RequestDeliveryBy" type="Date">
        /// Gets or sets the requestDeliveryBy for this salesOrderDetail.
        /// </field>
        /// <field name="Quantity" type="String">
        /// Gets or sets the quantity for this salesOrderDetail.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this salesOrderDetail.
        /// </field>
        /// <field name="ManualDiscountAmount" type="String">
        /// Gets or sets the manualDiscountAmount for this salesOrderDetail.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this salesOrderDetail.
        /// </field>
        /// <field name="VolumeDiscountAmount" type="String">
        /// Gets or sets the volumeDiscountAmount for this salesOrderDetail.
        /// </field>
        /// <field name="PricePerUnit" type="String">
        /// Gets or sets the pricePerUnit for this salesOrderDetail.
        /// </field>
        /// <field name="BaseAmount" type="String">
        /// Gets or sets the baseAmount for this salesOrderDetail.
        /// </field>
        /// <field name="ExtendedAmount" type="String">
        /// Gets or sets the extendedAmount for this salesOrderDetail.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this salesOrderDetail.
        /// </field>
        /// <field name="IsPriceOverridden" type="Boolean">
        /// Gets or sets the isPriceOverridden for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Name" type="String">
        /// Gets or sets the shipTo_Name for this salesOrderDetail.
        /// </field>
        /// <field name="Tax" type="String">
        /// Gets or sets the tax for this salesOrderDetail.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Line1" type="String">
        /// Gets or sets the shipTo_Line1 for this salesOrderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this salesOrderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Line2" type="String">
        /// Gets or sets the shipTo_Line2 for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Line3" type="String">
        /// Gets or sets the shipTo_Line3 for this salesOrderDetail.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_City" type="String">
        /// Gets or sets the shipTo_City for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_StateOrProvince" type="String">
        /// Gets or sets the shipTo_StateOrProvince for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Country" type="String">
        /// Gets or sets the shipTo_Country for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_PostalCode" type="String">
        /// Gets or sets the shipTo_PostalCode for this salesOrderDetail.
        /// </field>
        /// <field name="WillCall" type="Boolean">
        /// Gets or sets the willCall for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Telephone" type="String">
        /// Gets or sets the shipTo_Telephone for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_Fax" type="String">
        /// Gets or sets the shipTo_Fax for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_FreightTermsCode" type="Number">
        /// Gets or sets the shipTo_FreightTermsCode for this salesOrderDetail.
        /// </field>
        /// <field name="SalesOrderStateCode" type="Number">
        /// Gets or sets the salesOrderStateCode for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_ContactName" type="String">
        /// Gets or sets the shipTo_ContactName for this salesOrderDetail.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this salesOrderDetail.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this salesOrderDetail.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this salesOrderDetail.
        /// </field>
        /// <field name="SalesOrderIsPriceLocked" type="Boolean">
        /// Gets or sets the salesOrderIsPriceLocked for this salesOrderDetail.
        /// </field>
        /// <field name="ShipTo_AddressId" type="String">
        /// Gets or sets the shipTo_AddressId for this salesOrderDetail.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this salesOrderDetail.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this salesOrderDetail.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this salesOrderDetail.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this salesOrderDetail.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this salesOrderDetail.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this salesOrderDetail.
        /// </field>
        /// <field name="BaseAmount_Base" type="String">
        /// Gets or sets the baseAmount_Base for this salesOrderDetail.
        /// </field>
        /// <field name="PricePerUnit_Base" type="String">
        /// Gets or sets the pricePerUnit_Base for this salesOrderDetail.
        /// </field>
        /// <field name="VolumeDiscountAmount_Base" type="String">
        /// Gets or sets the volumeDiscountAmount_Base for this salesOrderDetail.
        /// </field>
        /// <field name="ExtendedAmount_Base" type="String">
        /// Gets or sets the extendedAmount_Base for this salesOrderDetail.
        /// </field>
        /// <field name="Tax_Base" type="String">
        /// Gets or sets the tax_Base for this salesOrderDetail.
        /// </field>
        /// <field name="ManualDiscountAmount_Base" type="String">
        /// Gets or sets the manualDiscountAmount_Base for this salesOrderDetail.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this salesOrderDetail.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this salesOrderDetail.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this salesOrderDetail.
        /// </field>
        /// <field name="unit_of_measurement_order_details" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_order_details for this salesOrderDetail.
        /// </field>
        /// <field name="order_details" type="msls.application.SalesOrder">
        /// Gets or sets the order_details for this salesOrderDetail.
        /// </field>
        /// <field name="product_order_details" type="msls.application.Product">
        /// Gets or sets the product_order_details for this salesOrderDetail.
        /// </field>
        /// <field name="details" type="msls.application.SalesOrderDetail.Details">
        /// Gets the details for this salesOrderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SalesOrder(entitySet) {
        /// <summary>
        /// Represents the SalesOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this salesOrder.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this salesOrder.
        /// </field>
        /// <field name="SalesOrderId" type="String">
        /// Gets or sets the salesOrderId for this salesOrder.
        /// </field>
        /// <field name="PriorityCode" type="Number">
        /// Gets or sets the priorityCode for this salesOrder.
        /// </field>
        /// <field name="SubmitStatus" type="Number">
        /// Gets or sets the submitStatus for this salesOrder.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this salesOrder.
        /// </field>
        /// <field name="SubmitDate" type="Date">
        /// Gets or sets the submitDate for this salesOrder.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this salesOrder.
        /// </field>
        /// <field name="SubmitStatusDescription" type="String">
        /// Gets or sets the submitStatusDescription for this salesOrder.
        /// </field>
        /// <field name="LastBackofficeSubmit" type="Date">
        /// Gets or sets the lastBackofficeSubmit for this salesOrder.
        /// </field>
        /// <field name="AccountId" type="String">
        /// Gets or sets the accountId for this salesOrder.
        /// </field>
        /// <field name="ContactId" type="String">
        /// Gets or sets the contactId for this salesOrder.
        /// </field>
        /// <field name="OrderNumber" type="String">
        /// Gets or sets the orderNumber for this salesOrder.
        /// </field>
        /// <field name="PricingErrorCode" type="Number">
        /// Gets or sets the pricingErrorCode for this salesOrder.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this salesOrder.
        /// </field>
        /// <field name="DiscountAmount" type="String">
        /// Gets or sets the discountAmount for this salesOrder.
        /// </field>
        /// <field name="FreightAmount" type="String">
        /// Gets or sets the freightAmount for this salesOrder.
        /// </field>
        /// <field name="TotalAmount" type="String">
        /// Gets or sets the totalAmount for this salesOrder.
        /// </field>
        /// <field name="TotalLineItemAmount" type="String">
        /// Gets or sets the totalLineItemAmount for this salesOrder.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount" type="String">
        /// Gets or sets the totalLineItemDiscountAmount for this salesOrder.
        /// </field>
        /// <field name="TotalAmountLessFreight" type="String">
        /// Gets or sets the totalAmountLessFreight for this salesOrder.
        /// </field>
        /// <field name="TotalDiscountAmount" type="String">
        /// Gets or sets the totalDiscountAmount for this salesOrder.
        /// </field>
        /// <field name="RequestDeliveryBy" type="Date">
        /// Gets or sets the requestDeliveryBy for this salesOrder.
        /// </field>
        /// <field name="TotalTax" type="String">
        /// Gets or sets the totalTax for this salesOrder.
        /// </field>
        /// <field name="ShippingMethodCode" type="Number">
        /// Gets or sets the shippingMethodCode for this salesOrder.
        /// </field>
        /// <field name="PaymentTermsCode" type="Number">
        /// Gets or sets the paymentTermsCode for this salesOrder.
        /// </field>
        /// <field name="FreightTermsCode" type="Number">
        /// Gets or sets the freightTermsCode for this salesOrder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this salesOrder.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this salesOrder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this salesOrder.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this salesOrder.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this salesOrder.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Name" type="String">
        /// Gets or sets the shipTo_Name for this salesOrder.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Line1" type="String">
        /// Gets or sets the shipTo_Line1 for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Line2" type="String">
        /// Gets or sets the shipTo_Line2 for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Line3" type="String">
        /// Gets or sets the shipTo_Line3 for this salesOrder.
        /// </field>
        /// <field name="ShipTo_City" type="String">
        /// Gets or sets the shipTo_City for this salesOrder.
        /// </field>
        /// <field name="ShipTo_StateOrProvince" type="String">
        /// Gets or sets the shipTo_StateOrProvince for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Country" type="String">
        /// Gets or sets the shipTo_Country for this salesOrder.
        /// </field>
        /// <field name="ShipTo_PostalCode" type="String">
        /// Gets or sets the shipTo_PostalCode for this salesOrder.
        /// </field>
        /// <field name="WillCall" type="Boolean">
        /// Gets or sets the willCall for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Telephone" type="String">
        /// Gets or sets the shipTo_Telephone for this salesOrder.
        /// </field>
        /// <field name="BillTo_Name" type="String">
        /// Gets or sets the billTo_Name for this salesOrder.
        /// </field>
        /// <field name="ShipTo_FreightTermsCode" type="Number">
        /// Gets or sets the shipTo_FreightTermsCode for this salesOrder.
        /// </field>
        /// <field name="ShipTo_Fax" type="String">
        /// Gets or sets the shipTo_Fax for this salesOrder.
        /// </field>
        /// <field name="BillTo_Line1" type="String">
        /// Gets or sets the billTo_Line1 for this salesOrder.
        /// </field>
        /// <field name="BillTo_Line2" type="String">
        /// Gets or sets the billTo_Line2 for this salesOrder.
        /// </field>
        /// <field name="BillTo_Line3" type="String">
        /// Gets or sets the billTo_Line3 for this salesOrder.
        /// </field>
        /// <field name="BillTo_City" type="String">
        /// Gets or sets the billTo_City for this salesOrder.
        /// </field>
        /// <field name="BillTo_StateOrProvince" type="String">
        /// Gets or sets the billTo_StateOrProvince for this salesOrder.
        /// </field>
        /// <field name="BillTo_Country" type="String">
        /// Gets or sets the billTo_Country for this salesOrder.
        /// </field>
        /// <field name="BillTo_PostalCode" type="String">
        /// Gets or sets the billTo_PostalCode for this salesOrder.
        /// </field>
        /// <field name="BillTo_Telephone" type="String">
        /// Gets or sets the billTo_Telephone for this salesOrder.
        /// </field>
        /// <field name="BillTo_Fax" type="String">
        /// Gets or sets the billTo_Fax for this salesOrder.
        /// </field>
        /// <field name="DiscountPercentage" type="String">
        /// Gets or sets the discountPercentage for this salesOrder.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this salesOrder.
        /// </field>
        /// <field name="BillTo_ContactName" type="String">
        /// Gets or sets the billTo_ContactName for this salesOrder.
        /// </field>
        /// <field name="CampaignId" type="String">
        /// Gets or sets the campaignId for this salesOrder.
        /// </field>
        /// <field name="BillTo_AddressId" type="String">
        /// Gets or sets the billTo_AddressId for this salesOrder.
        /// </field>
        /// <field name="ShipTo_AddressId" type="String">
        /// Gets or sets the shipTo_AddressId for this salesOrder.
        /// </field>
        /// <field name="IsPriceLocked" type="Boolean">
        /// Gets or sets the isPriceLocked for this salesOrder.
        /// </field>
        /// <field name="DateFulfilled" type="Date">
        /// Gets or sets the dateFulfilled for this salesOrder.
        /// </field>
        /// <field name="ShipTo_ContactName" type="String">
        /// Gets or sets the shipTo_ContactName for this salesOrder.
        /// </field>
        /// <field name="UTCConversionTimeZoneCode" type="Number">
        /// Gets or sets the uTCConversionTimeZoneCode for this salesOrder.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this salesOrder.
        /// </field>
        /// <field name="TimeZoneRuleVersionNumber" type="Number">
        /// Gets or sets the timeZoneRuleVersionNumber for this salesOrder.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this salesOrder.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this salesOrder.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this salesOrder.
        /// </field>
        /// <field name="TotalLineItemAmount_Base" type="String">
        /// Gets or sets the totalLineItemAmount_Base for this salesOrder.
        /// </field>
        /// <field name="TotalDiscountAmount_Base" type="String">
        /// Gets or sets the totalDiscountAmount_Base for this salesOrder.
        /// </field>
        /// <field name="TotalAmountLessFreight_Base" type="String">
        /// Gets or sets the totalAmountLessFreight_Base for this salesOrder.
        /// </field>
        /// <field name="TotalAmount_Base" type="String">
        /// Gets or sets the totalAmount_Base for this salesOrder.
        /// </field>
        /// <field name="DiscountAmount_Base" type="String">
        /// Gets or sets the discountAmount_Base for this salesOrder.
        /// </field>
        /// <field name="FreightAmount_Base" type="String">
        /// Gets or sets the freightAmount_Base for this salesOrder.
        /// </field>
        /// <field name="TotalLineItemDiscountAmount_Base" type="String">
        /// Gets or sets the totalLineItemDiscountAmount_Base for this salesOrder.
        /// </field>
        /// <field name="TotalTax_Base" type="String">
        /// Gets or sets the totalTax_Base for this salesOrder.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this salesOrder.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this salesOrder.
        /// </field>
        /// <field name="quote_orders" type="msls.application.Quote">
        /// Gets or sets the quote_orders for this salesOrder.
        /// </field>
        /// <field name="contactorders_associations" type="msls.EntityCollection" elementType="msls.application.ContactOrder">
        /// Gets the contactorders_associations for this salesOrder.
        /// </field>
        /// <field name="order_customer_accounts" type="msls.application.Account">
        /// Gets or sets the order_customer_accounts for this salesOrder.
        /// </field>
        /// <field name="opportunity_sales_orders" type="msls.application.Opportunity">
        /// Gets or sets the opportunity_sales_orders for this salesOrder.
        /// </field>
        /// <field name="team_orders" type="msls.application.Team">
        /// Gets or sets the team_orders for this salesOrder.
        /// </field>
        /// <field name="price_level_orders" type="msls.application.PriceLevel">
        /// Gets or sets the price_level_orders for this salesOrder.
        /// </field>
        /// <field name="Order_invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the order_invoices for this salesOrder.
        /// </field>
        /// <field name="Order_details" type="msls.EntityCollection" elementType="msls.application.SalesOrderDetail">
        /// Gets the order_details for this salesOrder.
        /// </field>
        /// <field name="details" type="msls.application.SalesOrder.Details">
        /// Gets the details for this salesOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SdkMessagePair(entitySet) {
        /// <summary>
        /// Represents the SdkMessagePair entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sdkMessagePair.
        /// </param>
        /// <field name="SdkMessagePairId" type="String">
        /// Gets or sets the sdkMessagePairId for this sdkMessagePair.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this sdkMessagePair.
        /// </field>
        /// <field name="CustomizationLevel" type="Number">
        /// Gets or sets the customizationLevel for this sdkMessagePair.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this sdkMessagePair.
        /// </field>
        /// <field name="SdkMessagePairIdUnique" type="String">
        /// Gets or sets the sdkMessagePairIdUnique for this sdkMessagePair.
        /// </field>
        /// <field name="Endpoint" type="String">
        /// Gets or sets the endpoint for this sdkMessagePair.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this sdkMessagePair.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this sdkMessagePair.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this sdkMessagePair.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this sdkMessagePair.
        /// </field>
        /// <field name="c_Namespace" type="String">
        /// Gets or sets the c_Namespace for this sdkMessagePair.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this sdkMessagePair.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this sdkMessagePair.
        /// </field>
        /// <field name="message_sdkmessagepair" type="msls.application.SdkMessage">
        /// Gets or sets the message_sdkmessagepair for this sdkMessagePair.
        /// </field>
        /// <field name="messagepair_sdkmessagerequests" type="msls.EntityCollection" elementType="msls.application.SdkMessageRequest">
        /// Gets the messagepair_sdkmessagerequests for this sdkMessagePair.
        /// </field>
        /// <field name="details" type="msls.application.SdkMessagePair.Details">
        /// Gets the details for this sdkMessagePair.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SdkMessageRequest(entitySet) {
        /// <summary>
        /// Represents the SdkMessageRequest entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sdkMessageRequest.
        /// </param>
        /// <field name="SdkMessageRequestId" type="String">
        /// Gets or sets the sdkMessageRequestId for this sdkMessageRequest.
        /// </field>
        /// <field name="CustomizationLevel" type="Number">
        /// Gets or sets the customizationLevel for this sdkMessageRequest.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this sdkMessageRequest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this sdkMessageRequest.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this sdkMessageRequest.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this sdkMessageRequest.
        /// </field>
        /// <field name="SdkMessageRequestIdUnique" type="String">
        /// Gets or sets the sdkMessageRequestIdUnique for this sdkMessageRequest.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this sdkMessageRequest.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this sdkMessageRequest.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this sdkMessageRequest.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this sdkMessageRequest.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this sdkMessageRequest.
        /// </field>
        /// <field name="PrimaryObjectTypeCode" type="String">
        /// Gets or sets the primaryObjectTypeCode for this sdkMessageRequest.
        /// </field>
        /// <field name="messagepair_sdkmessagerequest" type="msls.application.SdkMessagePair">
        /// Gets or sets the messagepair_sdkmessagerequest for this sdkMessageRequest.
        /// </field>
        /// <field name="messagerequest_sdkmessageresponses" type="msls.EntityCollection" elementType="msls.application.SdkMessageResponse">
        /// Gets the messagerequest_sdkmessageresponses for this sdkMessageRequest.
        /// </field>
        /// <field name="details" type="msls.application.SdkMessageRequest.Details">
        /// Gets the details for this sdkMessageRequest.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SdkMessageResponse(entitySet) {
        /// <summary>
        /// Represents the SdkMessageResponse entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sdkMessageResponse.
        /// </param>
        /// <field name="SdkMessageResponseId" type="String">
        /// Gets or sets the sdkMessageResponseId for this sdkMessageResponse.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this sdkMessageResponse.
        /// </field>
        /// <field name="SdkMessageResponseIdUnique" type="String">
        /// Gets or sets the sdkMessageResponseIdUnique for this sdkMessageResponse.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this sdkMessageResponse.
        /// </field>
        /// <field name="CustomizationLevel" type="Number">
        /// Gets or sets the customizationLevel for this sdkMessageResponse.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this sdkMessageResponse.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this sdkMessageResponse.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this sdkMessageResponse.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this sdkMessageResponse.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this sdkMessageResponse.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this sdkMessageResponse.
        /// </field>
        /// <field name="messagerequest_sdkmessageresponse" type="msls.application.SdkMessageRequest">
        /// Gets or sets the messagerequest_sdkmessageresponse for this sdkMessageResponse.
        /// </field>
        /// <field name="details" type="msls.application.SdkMessageResponse.Details">
        /// Gets the details for this sdkMessageResponse.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SdkMessage(entitySet) {
        /// <summary>
        /// Represents the SdkMessage entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sdkMessage.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this sdkMessage.
        /// </field>
        /// <field name="SdkMessageId" type="String">
        /// Gets or sets the sdkMessageId for this sdkMessage.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this sdkMessage.
        /// </field>
        /// <field name="IsPrivate" type="Boolean">
        /// Gets or sets the isPrivate for this sdkMessage.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this sdkMessage.
        /// </field>
        /// <field name="CategoryName" type="String">
        /// Gets or sets the categoryName for this sdkMessage.
        /// </field>
        /// <field name="CustomizationLevel" type="Number">
        /// Gets or sets the customizationLevel for this sdkMessage.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this sdkMessage.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this sdkMessage.
        /// </field>
        /// <field name="SdkMessageIdUnique" type="String">
        /// Gets or sets the sdkMessageIdUnique for this sdkMessage.
        /// </field>
        /// <field name="Expand" type="Boolean">
        /// Gets or sets the expand for this sdkMessage.
        /// </field>
        /// <field name="AutoTransact" type="Boolean">
        /// Gets or sets the autoTransact for this sdkMessage.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this sdkMessage.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this sdkMessage.
        /// </field>
        /// <field name="Availability" type="Number">
        /// Gets or sets the availability for this sdkMessage.
        /// </field>
        /// <field name="Template" type="Boolean">
        /// Gets or sets the template for this sdkMessage.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this sdkMessage.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this sdkMessage.
        /// </field>
        /// <field name="ThrottleSettings" type="String">
        /// Gets or sets the throttleSettings for this sdkMessage.
        /// </field>
        /// <field name="sdkmessageid_workflow_dependencies" type="msls.EntityCollection" elementType="msls.application.WorkflowDependency">
        /// Gets the sdkmessageid_workflow_dependencies for this sdkMessage.
        /// </field>
        /// <field name="message_sdkmessagepairs" type="msls.EntityCollection" elementType="msls.application.SdkMessagePair">
        /// Gets the message_sdkmessagepairs for this sdkMessage.
        /// </field>
        /// <field name="details" type="msls.application.SdkMessage.Details">
        /// Gets the details for this sdkMessage.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Solution(entitySet) {
        /// <summary>
        /// Represents the Solution entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this solution.
        /// </param>
        /// <field name="FriendlyName" type="String">
        /// Gets or sets the friendlyName for this solution.
        /// </field>
        /// <field name="SolutionId" type="String">
        /// Gets or sets the solutionId for this solution.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this solution.
        /// </field>
        /// <field name="InstalledOn" type="Date">
        /// Gets or sets the installedOn for this solution.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this solution.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this solution.
        /// </field>
        /// <field name="PublisherId" type="String">
        /// Gets or sets the publisherId for this solution.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this solution.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this solution.
        /// </field>
        /// <field name="IsVisible" type="Boolean">
        /// Gets or sets the isVisible for this solution.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this solution.
        /// </field>
        /// <field name="IsManaged" type="Boolean">
        /// Gets or sets the isManaged for this solution.
        /// </field>
        /// <field name="UniqueName" type="String">
        /// Gets or sets the uniqueName for this solution.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this solution.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this solution.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this solution.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this solution.
        /// </field>
        /// <field name="PinpointSolutionId" type="String">
        /// Gets or sets the pinpointSolutionId for this solution.
        /// </field>
        /// <field name="PinpointSolutionDefaultLocale" type="String">
        /// Gets or sets the pinpointSolutionDefaultLocale for this solution.
        /// </field>
        /// <field name="PinpointPublisherId" type="String">
        /// Gets or sets the pinpointPublisherId for this solution.
        /// </field>
        /// <field name="ConfigurationPageId" type="String">
        /// Gets or sets the configurationPageId for this solution.
        /// </field>
        /// <field name="PinpointAssetId" type="String">
        /// Gets or sets the pinpointAssetId for this solution.
        /// </field>
        /// <field name="details" type="msls.application.Solution.Details">
        /// Gets the details for this solution.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TeamRole(entitySet) {
        /// <summary>
        /// Represents the TeamRole entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this teamRole.
        /// </param>
        /// <field name="TeamRoleId" type="String">
        /// Gets or sets the teamRoleId for this teamRole.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this teamRole.
        /// </field>
        /// <field name="teamroles_association_role" type="msls.application.Role">
        /// Gets or sets the teamroles_association_role for this teamRole.
        /// </field>
        /// <field name="teamroles_association_team" type="msls.application.Team">
        /// Gets or sets the teamroles_association_team for this teamRole.
        /// </field>
        /// <field name="details" type="msls.application.TeamRole.Details">
        /// Gets the details for this teamRole.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Team(entitySet) {
        /// <summary>
        /// Represents the Team entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this team.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this team.
        /// </field>
        /// <field name="TeamId" type="String">
        /// Gets or sets the teamId for this team.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this team.
        /// </field>
        /// <field name="BusinessUnitId" type="String">
        /// Gets or sets the businessUnitId for this team.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this team.
        /// </field>
        /// <field name="EMailAddress" type="String">
        /// Gets or sets the eMailAddress for this team.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this team.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this team.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this team.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this team.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this team.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this team.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this team.
        /// </field>
        /// <field name="AdministratorId" type="String">
        /// Gets or sets the administratorId for this team.
        /// </field>
        /// <field name="IsDefault" type="Boolean">
        /// Gets or sets the isDefault for this team.
        /// </field>
        /// <field name="YomiName" type="String">
        /// Gets or sets the yomiName for this team.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this team.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this team.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this team.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this team.
        /// </field>
        /// <field name="team_workflows" type="msls.EntityCollection" elementType="msls.application.Workflow">
        /// Gets the team_workflows for this team.
        /// </field>
        /// <field name="team_workflowlogs" type="msls.EntityCollection" elementType="msls.application.WorkflowLog">
        /// Gets the team_workflowlogs for this team.
        /// </field>
        /// <field name="Team_quotes" type="msls.EntityCollection" elementType="msls.application.Quote">
        /// Gets the team_quotes for this team.
        /// </field>
        /// <field name="team_quotecloses" type="msls.EntityCollection" elementType="msls.application.QuoteClose">
        /// Gets the team_quotecloses for this team.
        /// </field>
        /// <field name="Team_orders" type="msls.EntityCollection" elementType="msls.application.SalesOrder">
        /// Gets the team_orders for this team.
        /// </field>
        /// <field name="teamroles_associations" type="msls.EntityCollection" elementType="msls.application.TeamRole">
        /// Gets the teamroles_associations for this team.
        /// </field>
        /// <field name="queue_team" type="msls.application.Queue">
        /// Gets or sets the queue_team for this team.
        /// </field>
        /// <field name="Team_accounts" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the team_accounts for this team.
        /// </field>
        /// <field name="Team_contacts" type="msls.EntityCollection" elementType="msls.application.Contact">
        /// Gets the team_contacts for this team.
        /// </field>
        /// <field name="Team_service_contracts" type="msls.EntityCollection" elementType="msls.application.Contract">
        /// Gets the team_service_contracts for this team.
        /// </field>
        /// <field name="Team_invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the team_invoices for this team.
        /// </field>
        /// <field name="lead_owning_teams" type="msls.EntityCollection" elementType="msls.application.Lead">
        /// Gets the lead_owning_teams for this team.
        /// </field>
        /// <field name="Team_opportunities" type="msls.EntityCollection" elementType="msls.application.Opportunity">
        /// Gets the team_opportunities for this team.
        /// </field>
        /// <field name="team_opportunitycloses" type="msls.EntityCollection" elementType="msls.application.OpportunityClose">
        /// Gets the team_opportunitycloses for this team.
        /// </field>
        /// <field name="details" type="msls.application.Team.Details">
        /// Gets the details for this team.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Territory(entitySet) {
        /// <summary>
        /// Represents the Territory entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this territory.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this territory.
        /// </field>
        /// <field name="TerritoryId" type="String">
        /// Gets or sets the territoryId for this territory.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this territory.
        /// </field>
        /// <field name="ManagerId" type="String">
        /// Gets or sets the managerId for this territory.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this territory.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this territory.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this territory.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this territory.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this territory.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this territory.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this territory.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this territory.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this territory.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this territory.
        /// </field>
        /// <field name="TransactionCurrencyId" type="String">
        /// Gets or sets the transactionCurrencyId for this territory.
        /// </field>
        /// <field name="ExchangeRate" type="String">
        /// Gets or sets the exchangeRate for this territory.
        /// </field>
        /// <field name="Territory_accounts" type="msls.EntityCollection" elementType="msls.application.Account">
        /// Gets the territory_accounts for this territory.
        /// </field>
        /// <field name="details" type="msls.application.Territory.Details">
        /// Gets the details for this territory.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UoM(entitySet) {
        /// <summary>
        /// Represents the UoM entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this uoM.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this uoM.
        /// </field>
        /// <field name="UoMId" type="String">
        /// Gets or sets the uoMId for this uoM.
        /// </field>
        /// <field name="Quantity" type="String">
        /// Gets or sets the quantity for this uoM.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this uoM.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this uoM.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this uoM.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this uoM.
        /// </field>
        /// <field name="IsScheduleBaseUoM" type="Boolean">
        /// Gets or sets the isScheduleBaseUoM for this uoM.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this uoM.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this uoM.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this uoM.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this uoM.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this uoM.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this uoM.
        /// </field>
        /// <field name="unit_of_measurement_base_unit" type="msls.application.UoM">
        /// Gets or sets the unit_of_measurement_base_unit for this uoM.
        /// </field>
        /// <field name="unit_of_measurement_base_units" type="msls.EntityCollection" elementType="msls.application.UoM">
        /// Gets the unit_of_measurement_base_units for this uoM.
        /// </field>
        /// <field name="unit_of_measure_schedule_conversions" type="msls.application.UoMSchedule">
        /// Gets or sets the unit_of_measure_schedule_conversions for this uoM.
        /// </field>
        /// <field name="Unit_of_measurement_products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the unit_of_measurement_products for this uoM.
        /// </field>
        /// <field name="Unit_of_measurement_contract_line_items" type="msls.EntityCollection" elementType="msls.application.ContractDetail">
        /// Gets the unit_of_measurement_contract_line_items for this uoM.
        /// </field>
        /// <field name="Unit_of_measurement_invoice_details" type="msls.EntityCollection" elementType="msls.application.InvoiceDetail">
        /// Gets the unit_of_measurement_invoice_details for this uoM.
        /// </field>
        /// <field name="Unit_of_measurement_opportunity_products" type="msls.EntityCollection" elementType="msls.application.OpportunityProduct">
        /// Gets the unit_of_measurement_opportunity_products for this uoM.
        /// </field>
        /// <field name="Unit_of_measurement_quote_details" type="msls.EntityCollection" elementType="msls.application.QuoteDetail">
        /// Gets the unit_of_measurement_quote_details for this uoM.
        /// </field>
        /// <field name="Unit_of_measurement_order_details" type="msls.EntityCollection" elementType="msls.application.SalesOrderDetail">
        /// Gets the unit_of_measurement_order_details for this uoM.
        /// </field>
        /// <field name="details" type="msls.application.UoM.Details">
        /// Gets the details for this uoM.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UoMSchedule(entitySet) {
        /// <summary>
        /// Represents the UoMSchedule entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this uoMSchedule.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this uoMSchedule.
        /// </field>
        /// <field name="UoMScheduleId" type="String">
        /// Gets or sets the uoMScheduleId for this uoMSchedule.
        /// </field>
        /// <field name="OrganizationId" type="String">
        /// Gets or sets the organizationId for this uoMSchedule.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this uoMSchedule.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this uoMSchedule.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this uoMSchedule.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this uoMSchedule.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this uoMSchedule.
        /// </field>
        /// <field name="VersionNumber" type="String">
        /// Gets or sets the versionNumber for this uoMSchedule.
        /// </field>
        /// <field name="ImportSequenceNumber" type="Number">
        /// Gets or sets the importSequenceNumber for this uoMSchedule.
        /// </field>
        /// <field name="BaseUoMName" type="String">
        /// Gets or sets the baseUoMName for this uoMSchedule.
        /// </field>
        /// <field name="OverriddenCreatedOn" type="Date">
        /// Gets or sets the overriddenCreatedOn for this uoMSchedule.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this uoMSchedule.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this uoMSchedule.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this uoMSchedule.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this uoMSchedule.
        /// </field>
        /// <field name="Unit_of_measure_schedule_conversions" type="msls.EntityCollection" elementType="msls.application.UoM">
        /// Gets the unit_of_measure_schedule_conversions for this uoMSchedule.
        /// </field>
        /// <field name="Unit_of_measurement_schedule_products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the unit_of_measurement_schedule_products for this uoMSchedule.
        /// </field>
        /// <field name="contract_detail_unit_of_measure_schedules" type="msls.EntityCollection" elementType="msls.application.ContractDetail">
        /// Gets the contract_detail_unit_of_measure_schedules for this uoMSchedule.
        /// </field>
        /// <field name="details" type="msls.application.UoMSchedule.Details">
        /// Gets the details for this uoMSchedule.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WorkflowDependency(entitySet) {
        /// <summary>
        /// Represents the WorkflowDependency entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this workflowDependency.
        /// </param>
        /// <field name="WorkflowDependencyId" type="String">
        /// Gets or sets the workflowDependencyId for this workflowDependency.
        /// </field>
        /// <field name="ParameterName" type="String">
        /// Gets or sets the parameterName for this workflowDependency.
        /// </field>
        /// <field name="RelatedEntityName" type="String">
        /// Gets or sets the relatedEntityName for this workflowDependency.
        /// </field>
        /// <field name="RelatedAttributeName" type="String">
        /// Gets or sets the relatedAttributeName for this workflowDependency.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this workflowDependency.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this workflowDependency.
        /// </field>
        /// <field name="Type" type="Number">
        /// Gets or sets the type for this workflowDependency.
        /// </field>
        /// <field name="EntityAttributes" type="String">
        /// Gets or sets the entityAttributes for this workflowDependency.
        /// </field>
        /// <field name="CustomEntityName" type="String">
        /// Gets or sets the customEntityName for this workflowDependency.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this workflowDependency.
        /// </field>
        /// <field name="DependentEntityName" type="String">
        /// Gets or sets the dependentEntityName for this workflowDependency.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this workflowDependency.
        /// </field>
        /// <field name="DependentAttributeName" type="String">
        /// Gets or sets the dependentAttributeName for this workflowDependency.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this workflowDependency.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this workflowDependency.
        /// </field>
        /// <field name="ParameterType" type="String">
        /// Gets or sets the parameterType for this workflowDependency.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this workflowDependency.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this workflowDependency.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this workflowDependency.
        /// </field>
        /// <field name="workflow_dependencies" type="msls.application.Workflow">
        /// Gets or sets the workflow_dependencies for this workflowDependency.
        /// </field>
        /// <field name="sdkmessageid_workflow_dependency" type="msls.application.SdkMessage">
        /// Gets or sets the sdkmessageid_workflow_dependency for this workflowDependency.
        /// </field>
        /// <field name="details" type="msls.application.WorkflowDependency.Details">
        /// Gets the details for this workflowDependency.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WorkflowLog(entitySet) {
        /// <summary>
        /// Represents the WorkflowLog entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this workflowLog.
        /// </param>
        /// <field name="WorkflowLogId" type="String">
        /// Gets or sets the workflowLogId for this workflowLog.
        /// </field>
        /// <field name="AsyncOperationId" type="String">
        /// Gets or sets the asyncOperationId for this workflowLog.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this workflowLog.
        /// </field>
        /// <field name="CompletedOn" type="Date">
        /// Gets or sets the completedOn for this workflowLog.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this workflowLog.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this workflowLog.
        /// </field>
        /// <field name="Message" type="String">
        /// Gets or sets the message for this workflowLog.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this workflowLog.
        /// </field>
        /// <field name="StageName" type="String">
        /// Gets or sets the stageName for this workflowLog.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this workflowLog.
        /// </field>
        /// <field name="StepName" type="String">
        /// Gets or sets the stepName for this workflowLog.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this workflowLog.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this workflowLog.
        /// </field>
        /// <field name="RegardingObjectId" type="String">
        /// Gets or sets the regardingObjectId for this workflowLog.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this workflowLog.
        /// </field>
        /// <field name="ErrorCode" type="Number">
        /// Gets or sets the errorCode for this workflowLog.
        /// </field>
        /// <field name="ActivityName" type="String">
        /// Gets or sets the activityName for this workflowLog.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this workflowLog.
        /// </field>
        /// <field name="ChildWorkflowInstanceId" type="String">
        /// Gets or sets the childWorkflowInstanceId for this workflowLog.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this workflowLog.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this workflowLog.
        /// </field>
        /// <field name="InteractionActivityResult" type="String">
        /// Gets or sets the interactionActivityResult for this workflowLog.
        /// </field>
        /// <field name="team_workflowlog" type="msls.application.Team">
        /// Gets or sets the team_workflowlog for this workflowLog.
        /// </field>
        /// <field name="details" type="msls.application.WorkflowLog.Details">
        /// Gets the details for this workflowLog.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Workflow(entitySet) {
        /// <summary>
        /// Represents the Workflow entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this workflow.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this workflow.
        /// </field>
        /// <field name="WorkflowId" type="String">
        /// Gets or sets the workflowId for this workflow.
        /// </field>
        /// <field name="OnDemand" type="Boolean">
        /// Gets or sets the onDemand for this workflow.
        /// </field>
        /// <field name="PluginTypeId" type="String">
        /// Gets or sets the pluginTypeId for this workflow.
        /// </field>
        /// <field name="CreatedOn" type="Date">
        /// Gets or sets the createdOn for this workflow.
        /// </field>
        /// <field name="Type" type="Number">
        /// Gets or sets the type for this workflow.
        /// </field>
        /// <field name="PrimaryEntity" type="String">
        /// Gets or sets the primaryEntity for this workflow.
        /// </field>
        /// <field name="OwnerId" type="String">
        /// Gets or sets the ownerId for this workflow.
        /// </field>
        /// <field name="ModifiedOn" type="Date">
        /// Gets or sets the modifiedOn for this workflow.
        /// </field>
        /// <field name="AsyncAutoDelete" type="Boolean">
        /// Gets or sets the asyncAutoDelete for this workflow.
        /// </field>
        /// <field name="IsCrmUIWorkflow" type="Boolean">
        /// Gets or sets the isCrmUIWorkflow for this workflow.
        /// </field>
        /// <field name="Subprocess" type="Boolean">
        /// Gets or sets the subprocess for this workflow.
        /// </field>
        /// <field name="Scope" type="Number">
        /// Gets or sets the scope for this workflow.
        /// </field>
        /// <field name="StatusCode" type="Number">
        /// Gets or sets the statusCode for this workflow.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this workflow.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this workflow.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this workflow.
        /// </field>
        /// <field name="OwningBusinessUnit" type="String">
        /// Gets or sets the owningBusinessUnit for this workflow.
        /// </field>
        /// <field name="StateCode" type="Number">
        /// Gets or sets the stateCode for this workflow.
        /// </field>
        /// <field name="OwningUser" type="String">
        /// Gets or sets the owningUser for this workflow.
        /// </field>
        /// <field name="WorkflowIdUnique" type="String">
        /// Gets or sets the workflowIdUnique for this workflow.
        /// </field>
        /// <field name="SupportingSolutionId" type="String">
        /// Gets or sets the supportingSolutionId for this workflow.
        /// </field>
        /// <field name="SolutionId" type="String">
        /// Gets or sets the solutionId for this workflow.
        /// </field>
        /// <field name="OverwriteTime" type="Date">
        /// Gets or sets the overwriteTime for this workflow.
        /// </field>
        /// <field name="ComponentState" type="Number">
        /// Gets or sets the componentState for this workflow.
        /// </field>
        /// <field name="CreatedOnBehalfBy" type="String">
        /// Gets or sets the createdOnBehalfBy for this workflow.
        /// </field>
        /// <field name="ModifiedOnBehalfBy" type="String">
        /// Gets or sets the modifiedOnBehalfBy for this workflow.
        /// </field>
        /// <field name="Xaml" type="String">
        /// Gets or sets the xaml for this workflow.
        /// </field>
        /// <field name="TriggerOnDelete" type="Boolean">
        /// Gets or sets the triggerOnDelete for this workflow.
        /// </field>
        /// <field name="TriggerOnCreate" type="Boolean">
        /// Gets or sets the triggerOnCreate for this workflow.
        /// </field>
        /// <field name="TriggerOnUpdateAttributeList" type="String">
        /// Gets or sets the triggerOnUpdateAttributeList for this workflow.
        /// </field>
        /// <field name="Category" type="Number">
        /// Gets or sets the category for this workflow.
        /// </field>
        /// <field name="LanguageCode" type="Number">
        /// Gets or sets the languageCode for this workflow.
        /// </field>
        /// <field name="IsManaged" type="Boolean">
        /// Gets or sets the isManaged for this workflow.
        /// </field>
        /// <field name="IsCustomizable" type="Boolean">
        /// Gets or sets the isCustomizable for this workflow.
        /// </field>
        /// <field name="InputParameters" type="String">
        /// Gets or sets the inputParameters for this workflow.
        /// </field>
        /// <field name="workflow_active_workflow" type="msls.application.Workflow">
        /// Gets or sets the workflow_active_workflow for this workflow.
        /// </field>
        /// <field name="workflow_active_workflows" type="msls.EntityCollection" elementType="msls.application.Workflow">
        /// Gets the workflow_active_workflows for this workflow.
        /// </field>
        /// <field name="team_workflow" type="msls.application.Team">
        /// Gets or sets the team_workflow for this workflow.
        /// </field>
        /// <field name="workflow_parent_workflow" type="msls.application.Workflow">
        /// Gets or sets the workflow_parent_workflow for this workflow.
        /// </field>
        /// <field name="workflow_parent_workflows" type="msls.EntityCollection" elementType="msls.application.Workflow">
        /// Gets the workflow_parent_workflows for this workflow.
        /// </field>
        /// <field name="Workflow_dependencies" type="msls.EntityCollection" elementType="msls.application.WorkflowDependency">
        /// Gets the workflow_dependencies for this workflow.
        /// </field>
        /// <field name="details" type="msls.application.Workflow.Details">
        /// Gets the details for this workflow.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function X360Configuration(entitySet) {
        /// <summary>
        /// Represents the X360Configuration entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this x360Configuration.
        /// </param>
        /// <field name="Username" type="String">
        /// Gets or sets the username for this x360Configuration.
        /// </field>
        /// <field name="CredentialsUri" type="String">
        /// Gets or sets the credentialsUri for this x360Configuration.
        /// </field>
        /// <field name="DiscoveryUri" type="String">
        /// Gets or sets the discoveryUri for this x360Configuration.
        /// </field>
        /// <field name="OrganizationName" type="String">
        /// Gets or sets the organizationName for this x360Configuration.
        /// </field>
        /// <field name="OrganizationUri" type="String">
        /// Gets or sets the organizationUri for this x360Configuration.
        /// </field>
        /// <field name="Timeout" type="String">
        /// Gets or sets the timeout for this x360Configuration.
        /// </field>
        /// <field name="AuthenticationType" type="String">
        /// Gets or sets the authenticationType for this x360Configuration.
        /// </field>
        /// <field name="LicenseKey" type="String">
        /// Gets or sets the licenseKey for this x360Configuration.
        /// </field>
        /// <field name="LicenseKeyStatus" type="String">
        /// Gets or sets the licenseKeyStatus for this x360Configuration.
        /// </field>
        /// <field name="LastError" type="String">
        /// Gets or sets the lastError for this x360Configuration.
        /// </field>
        /// <field name="details" type="msls.application.X360Configuration.Details">
        /// Gets the details for this x360Configuration.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DynamicsCRMData(dataWorkspace) {
        /// <summary>
        /// Represents the DynamicsCRMData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="AccountLeads" type="msls.EntitySet">
        /// Gets the AccountLeads entity set.
        /// </field>
        /// <field name="Accounts" type="msls.EntitySet">
        /// Gets the Accounts entity set.
        /// </field>
        /// <field name="Activities" type="msls.EntitySet">
        /// Gets the Activities entity set.
        /// </field>
        /// <field name="ActivityParties" type="msls.EntitySet">
        /// Gets the ActivityParties entity set.
        /// </field>
        /// <field name="Attachments" type="msls.EntitySet">
        /// Gets the Attachments entity set.
        /// </field>
        /// <field name="CompetitorProducts" type="msls.EntitySet">
        /// Gets the CompetitorProducts entity set.
        /// </field>
        /// <field name="Competitors" type="msls.EntitySet">
        /// Gets the Competitors entity set.
        /// </field>
        /// <field name="ContactLeads" type="msls.EntitySet">
        /// Gets the ContactLeads entity set.
        /// </field>
        /// <field name="ContactOrders" type="msls.EntitySet">
        /// Gets the ContactOrders entity set.
        /// </field>
        /// <field name="Contacts" type="msls.EntitySet">
        /// Gets the Contacts entity set.
        /// </field>
        /// <field name="ContractDetails" type="msls.EntitySet">
        /// Gets the ContractDetails entity set.
        /// </field>
        /// <field name="Contracts" type="msls.EntitySet">
        /// Gets the Contracts entity set.
        /// </field>
        /// <field name="InvoiceDetails" type="msls.EntitySet">
        /// Gets the InvoiceDetails entity set.
        /// </field>
        /// <field name="Invoices" type="msls.EntitySet">
        /// Gets the Invoices entity set.
        /// </field>
        /// <field name="LeadCompetitors" type="msls.EntitySet">
        /// Gets the LeadCompetitors entity set.
        /// </field>
        /// <field name="LeadProducts" type="msls.EntitySet">
        /// Gets the LeadProducts entity set.
        /// </field>
        /// <field name="Leads" type="msls.EntitySet">
        /// Gets the Leads entity set.
        /// </field>
        /// <field name="Opportunities" type="msls.EntitySet">
        /// Gets the Opportunities entity set.
        /// </field>
        /// <field name="OpportunityCloses" type="msls.EntitySet">
        /// Gets the OpportunityCloses entity set.
        /// </field>
        /// <field name="OpportunityCompetitors" type="msls.EntitySet">
        /// Gets the OpportunityCompetitors entity set.
        /// </field>
        /// <field name="OpportunityProducts" type="msls.EntitySet">
        /// Gets the OpportunityProducts entity set.
        /// </field>
        /// <field name="PriceLevels" type="msls.EntitySet">
        /// Gets the PriceLevels entity set.
        /// </field>
        /// <field name="Products" type="msls.EntitySet">
        /// Gets the Products entity set.
        /// </field>
        /// <field name="Queues" type="msls.EntitySet">
        /// Gets the Queues entity set.
        /// </field>
        /// <field name="QuoteCloses" type="msls.EntitySet">
        /// Gets the QuoteCloses entity set.
        /// </field>
        /// <field name="QuoteDetails" type="msls.EntitySet">
        /// Gets the QuoteDetails entity set.
        /// </field>
        /// <field name="Quotes" type="msls.EntitySet">
        /// Gets the Quotes entity set.
        /// </field>
        /// <field name="Roles" type="msls.EntitySet">
        /// Gets the Roles entity set.
        /// </field>
        /// <field name="SalesOrderDetails" type="msls.EntitySet">
        /// Gets the SalesOrderDetails entity set.
        /// </field>
        /// <field name="SalesOrders" type="msls.EntitySet">
        /// Gets the SalesOrders entity set.
        /// </field>
        /// <field name="SdkMessagePairs" type="msls.EntitySet">
        /// Gets the SdkMessagePairs entity set.
        /// </field>
        /// <field name="SdkMessageRequests" type="msls.EntitySet">
        /// Gets the SdkMessageRequests entity set.
        /// </field>
        /// <field name="SdkMessageResponses" type="msls.EntitySet">
        /// Gets the SdkMessageResponses entity set.
        /// </field>
        /// <field name="SdkMessages" type="msls.EntitySet">
        /// Gets the SdkMessages entity set.
        /// </field>
        /// <field name="Solutions" type="msls.EntitySet">
        /// Gets the Solutions entity set.
        /// </field>
        /// <field name="TeamRoles" type="msls.EntitySet">
        /// Gets the TeamRoles entity set.
        /// </field>
        /// <field name="Teams" type="msls.EntitySet">
        /// Gets the Teams entity set.
        /// </field>
        /// <field name="Territories" type="msls.EntitySet">
        /// Gets the Territories entity set.
        /// </field>
        /// <field name="UoMs" type="msls.EntitySet">
        /// Gets the UoMs entity set.
        /// </field>
        /// <field name="UoMSchedules" type="msls.EntitySet">
        /// Gets the UoMSchedules entity set.
        /// </field>
        /// <field name="WorkflowDependencies" type="msls.EntitySet">
        /// Gets the WorkflowDependencies entity set.
        /// </field>
        /// <field name="WorkflowLogs" type="msls.EntitySet">
        /// Gets the WorkflowLogs entity set.
        /// </field>
        /// <field name="Workflows" type="msls.EntitySet">
        /// Gets the Workflows entity set.
        /// </field>
        /// <field name="X360Configurations" type="msls.EntitySet">
        /// Gets the X360Configurations entity set.
        /// </field>
        /// <field name="details" type="msls.application.DynamicsCRMData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="DynamicsCRMData" type="msls.application.DynamicsCRMData">
        /// Gets the DynamicsCRMData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        AccountLead: $defineEntity(AccountLead, [
            { name: "AccountLeadId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "accountleads_association_lead", kind: "reference", type: Lead },
            { name: "accountleads_association_account", kind: "reference", type: Account }
        ]),

        Account: $defineEntity(Account, [
            { name: "Name", type: String },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "Address1_AddressId", type: String },
            { name: "Address2_AddressId", type: String },
            { name: "AccountCategoryCode", type: Number },
            { name: "CustomerSizeCode", type: Number },
            { name: "PreferredContactMethodCode", type: Number },
            { name: "CustomerTypeCode", type: Number },
            { name: "AccountRatingCode", type: Number },
            { name: "IndustryCode", type: Number },
            { name: "TerritoryCode", type: Number },
            { name: "AccountClassificationCode", type: Number },
            { name: "BusinessTypeCode", type: Number },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "PaymentTermsCode", type: Number },
            { name: "ShippingMethodCode", type: Number },
            { name: "ParticipatesInWorkflow", type: Boolean },
            { name: "AccountNumber", type: String },
            { name: "Revenue", type: String },
            { name: "NumberOfEmployees", type: Number },
            { name: "Description", type: String },
            { name: "SIC", type: String },
            { name: "OwnershipCode", type: Number },
            { name: "MarketCap", type: String },
            { name: "SharesOutstanding", type: Number },
            { name: "TickerSymbol", type: String },
            { name: "StockExchange", type: String },
            { name: "WebSiteURL", type: String },
            { name: "FtpSiteURL", type: String },
            { name: "EMailAddress1", type: String },
            { name: "EMailAddress2", type: String },
            { name: "EMailAddress3", type: String },
            { name: "DoNotPhone", type: Boolean },
            { name: "DoNotFax", type: Boolean },
            { name: "Telephone1", type: String },
            { name: "DoNotEMail", type: Boolean },
            { name: "Telephone2", type: String },
            { name: "Fax", type: String },
            { name: "Telephone3", type: String },
            { name: "DoNotPostalMail", type: Boolean },
            { name: "DoNotBulkEMail", type: Boolean },
            { name: "DoNotBulkPostalMail", type: Boolean },
            { name: "CreditLimit", type: String },
            { name: "CreditOnHold", type: Boolean },
            { name: "IsPrivate", type: Boolean, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "Aging30", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "Aging60", type: String, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "Aging90", type: String, isReadOnly: true },
            { name: "Address1_AddressTypeCode", type: Number },
            { name: "Address1_Name", type: String },
            { name: "Address1_PrimaryContactName", type: String },
            { name: "Address1_Line1", type: String },
            { name: "Address1_Line2", type: String },
            { name: "Address1_Line3", type: String },
            { name: "Address1_City", type: String },
            { name: "Address1_StateOrProvince", type: String },
            { name: "Address1_County", type: String },
            { name: "Address1_Country", type: String },
            { name: "Address1_PostOfficeBox", type: String },
            { name: "Address1_PostalCode", type: String },
            { name: "Address1_UTCOffset", type: Number },
            { name: "Address1_FreightTermsCode", type: Number },
            { name: "Address1_UPSZone", type: String },
            { name: "Address1_Latitude", type: Number },
            { name: "Address1_Telephone1", type: String },
            { name: "Address1_Longitude", type: Number },
            { name: "Address1_ShippingMethodCode", type: Number },
            { name: "Address1_Telephone2", type: String },
            { name: "Address1_Telephone3", type: String },
            { name: "Address1_Fax", type: String },
            { name: "Address2_AddressTypeCode", type: Number },
            { name: "Address2_Name", type: String },
            { name: "Address2_PrimaryContactName", type: String },
            { name: "Address2_Line1", type: String },
            { name: "Address2_Line2", type: String },
            { name: "Address2_Line3", type: String },
            { name: "Address2_City", type: String },
            { name: "Address2_StateOrProvince", type: String },
            { name: "Address2_County", type: String },
            { name: "Address2_Country", type: String },
            { name: "Address2_PostOfficeBox", type: String },
            { name: "Address2_PostalCode", type: String },
            { name: "Address2_UTCOffset", type: Number },
            { name: "Address2_FreightTermsCode", type: Number },
            { name: "Address2_UPSZone", type: String },
            { name: "Address2_Latitude", type: Number },
            { name: "Address2_Telephone1", type: String },
            { name: "Address2_Longitude", type: Number },
            { name: "Address2_ShippingMethodCode", type: Number },
            { name: "Address2_Telephone2", type: String },
            { name: "Address2_Telephone3", type: String },
            { name: "Address2_Fax", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "PreferredAppointmentDayCode", type: Number },
            { name: "PreferredSystemUserId", type: String },
            { name: "PreferredAppointmentTimeCode", type: Number },
            { name: "Merged", type: Boolean, isReadOnly: true },
            { name: "DoNotSendMM", type: Boolean },
            { name: "LastUsedInCampaign", type: Date },
            { name: "PreferredServiceId", type: String },
            { name: "PreferredEquipmentId", type: String },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "CreditLimit_Base", type: String, isReadOnly: true },
            { name: "Aging30_Base", type: String, isReadOnly: true },
            { name: "Revenue_Base", type: String, isReadOnly: true },
            { name: "Aging90_Base", type: String, isReadOnly: true },
            { name: "MarketCap_Base", type: String, isReadOnly: true },
            { name: "Aging60_Base", type: String, isReadOnly: true },
            { name: "YomiName", type: String },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "Quote_customer_accounts", kind: "collection", elementType: Quote },
            { name: "Order_customer_accounts", kind: "collection", elementType: SalesOrder },
            { name: "team_accounts", kind: "reference", type: Team },
            { name: "territory_accounts", kind: "reference", type: Territory },
            { name: "Invoice_customer_accounts", kind: "collection", elementType: Invoice },
            { name: "Lead_customer_accounts", kind: "collection", elementType: Lead },
            { name: "account_originating_lead", kind: "reference", type: Lead },
            { name: "Opportunity_customer_accounts", kind: "collection", elementType: Opportunity },
            { name: "price_level_accounts", kind: "reference", type: PriceLevel },
            { name: "accountleads_associations", kind: "collection", elementType: AccountLead },
            { name: "account_master_account", kind: "reference", type: Account },
            { name: "account_master_accounts", kind: "collection", elementType: Account },
            { name: "account_parent_account", kind: "reference", type: Account },
            { name: "account_parent_accounts", kind: "collection", elementType: Account },
            { name: "account_primary_contact", kind: "reference", type: Contact },
            { name: "Contract_billingcustomer_accounts", kind: "collection", elementType: Contract },
            { name: "Contract_customer_accounts", kind: "collection", elementType: Contract },
            { name: "Contractlineitem_customer_accounts", kind: "collection", elementType: ContractDetail },
            { name: "Contact_customer_accounts", kind: "collection", elementType: Contact }
        ]),

        Activity: $defineEntity(Activity, [
            { name: "Subject", type: String },
            { name: "Description", type: String },
            { name: "ActivityId", type: String, isReadOnly: true },
            { name: "ActivityTypeCode", type: String, isReadOnly: true },
            { name: "ActualDurationMinutes", type: Number },
            { name: "ActualEnd", type: Date },
            { name: "ActualStart", type: Date },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningTeam", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "ScheduledEnd", type: Date },
            { name: "ScheduledStart", type: Date },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "Activity_ActivityParties", kind: "collection", elementType: ActivityParty }
        ]),

        ActivityParty: $defineEntity(ActivityParty, [
            { name: "AddressUsed", type: String },
            { name: "ActivityPartyId", type: String, isReadOnly: true },
            { name: "DoNotEMail", type: Boolean },
            { name: "DoNotFax", type: Boolean },
            { name: "DoNotPhone", type: Boolean },
            { name: "DoNotPostalMail", type: Boolean },
            { name: "Effort", type: Number },
            { name: "ExchangeEntryId", type: String, isReadOnly: true },
            { name: "IsPartyDeleted", type: Boolean },
            { name: "InstanceTypeCode", type: Number, isReadOnly: true },
            { name: "ScheduledEnd", type: Date },
            { name: "ScheduledStart", type: Date },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ActivityParty_Activity", kind: "reference", type: Activity }
        ]),

        Attachment: $defineEntity(Attachment, [
            { name: "FileName", type: String },
            { name: "AttachmentId", type: String, isReadOnly: true },
            { name: "Body", type: String },
            { name: "Subject", type: String },
            { name: "FileSize", type: Number, isReadOnly: true },
            { name: "MimeType", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true }
        ]),

        CompetitorProduct: $defineEntity(CompetitorProduct, [
            { name: "CompetitorProductId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "competitorproduct_association_product", kind: "reference", type: Product },
            { name: "competitorproduct_association_competitor", kind: "reference", type: Competitor }
        ]),

        Competitor: $defineEntity(Competitor, [
            { name: "Name", type: String },
            { name: "CompetitorId", type: String, isReadOnly: true },
            { name: "Address1_AddressId", type: String },
            { name: "Address2_AddressId", type: String },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "Overview", type: String },
            { name: "ReferenceInfoUrl", type: String },
            { name: "ReportedRevenue", type: String },
            { name: "ReportingQuarter", type: Number },
            { name: "ReportingYear", type: Number },
            { name: "Strengths", type: String },
            { name: "Weaknesses", type: String },
            { name: "Opportunities", type: String },
            { name: "Threats", type: String },
            { name: "TickerSymbol", type: String },
            { name: "KeyProduct", type: String },
            { name: "StockExchange", type: String },
            { name: "WinPercentage", type: Number },
            { name: "WebSiteUrl", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "Address1_AddressTypeCode", type: Number },
            { name: "Address1_Name", type: String },
            { name: "Address1_Line1", type: String },
            { name: "Address1_Line2", type: String },
            { name: "Address1_Line3", type: String },
            { name: "Address1_City", type: String },
            { name: "Address1_StateOrProvince", type: String },
            { name: "Address1_County", type: String },
            { name: "Address1_Country", type: String },
            { name: "Address1_PostOfficeBox", type: String },
            { name: "Address1_PostalCode", type: String },
            { name: "Address1_UTCOffset", type: Number },
            { name: "Address1_UPSZone", type: String },
            { name: "Address1_Latitude", type: Number },
            { name: "Address1_Telephone1", type: String },
            { name: "Address1_Longitude", type: Number },
            { name: "Address1_ShippingMethodCode", type: Number },
            { name: "Address1_Telephone2", type: String },
            { name: "Address1_Telephone3", type: String },
            { name: "Address1_Fax", type: String },
            { name: "Address2_AddressTypeCode", type: Number },
            { name: "Address2_Name", type: String },
            { name: "Address2_Line1", type: String },
            { name: "Address2_Line2", type: String },
            { name: "Address2_Line3", type: String },
            { name: "Address2_City", type: String },
            { name: "Address2_StateOrProvince", type: String },
            { name: "Address2_County", type: String },
            { name: "Address2_Country", type: String },
            { name: "Address2_PostOfficeBox", type: String },
            { name: "Address2_PostalCode", type: String },
            { name: "Address2_UTCOffset", type: Number },
            { name: "Address2_UPSZone", type: String },
            { name: "Address2_Latitude", type: Number },
            { name: "Address2_Telephone1", type: String },
            { name: "Address2_Longitude", type: Number },
            { name: "Address2_ShippingMethodCode", type: Number },
            { name: "Address2_Telephone2", type: String },
            { name: "Address2_Telephone3", type: String },
            { name: "Address2_Fax", type: String },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "ReportedRevenue_Base", type: String, isReadOnly: true },
            { name: "YomiName", type: String },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "leadcompetitors_associations", kind: "collection", elementType: LeadCompetitor },
            { name: "Competitor_opportunity_activities", kind: "collection", elementType: OpportunityClose },
            { name: "opportunitycompetitors_associations", kind: "collection", elementType: OpportunityCompetitor },
            { name: "competitorproduct_associations", kind: "collection", elementType: CompetitorProduct }
        ]),

        ContactLead: $defineEntity(ContactLead, [
            { name: "ContactLeadId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "contactleads_association_lead", kind: "reference", type: Lead },
            { name: "contactleads_association_contact", kind: "reference", type: Contact }
        ]),

        ContactOrder: $defineEntity(ContactOrder, [
            { name: "ContactOrderId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "contactorders_association_salesorder", kind: "reference", type: SalesOrder },
            { name: "contactorders_association_contact", kind: "reference", type: Contact }
        ]),

        Contact: $defineEntity(Contact, [
            { name: "FullName", type: String, isReadOnly: true },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "Address1_AddressId", type: String },
            { name: "Address2_AddressId", type: String },
            { name: "CustomerSizeCode", type: Number },
            { name: "CustomerTypeCode", type: Number },
            { name: "PreferredContactMethodCode", type: Number },
            { name: "LeadSourceCode", type: Number },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "PaymentTermsCode", type: Number },
            { name: "ShippingMethodCode", type: Number },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "ParticipatesInWorkflow", type: Boolean },
            { name: "IsBackofficeCustomer", type: Boolean },
            { name: "Salutation", type: String },
            { name: "JobTitle", type: String },
            { name: "FirstName", type: String },
            { name: "Department", type: String },
            { name: "NickName", type: String },
            { name: "MiddleName", type: String },
            { name: "LastName", type: String },
            { name: "Suffix", type: String },
            { name: "YomiFirstName", type: String },
            { name: "YomiMiddleName", type: String },
            { name: "YomiLastName", type: String },
            { name: "Anniversary", type: Date },
            { name: "BirthDate", type: Date },
            { name: "GovernmentId", type: String },
            { name: "YomiFullName", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "EmployeeId", type: String },
            { name: "GenderCode", type: Number },
            { name: "AnnualIncome", type: String },
            { name: "HasChildrenCode", type: Number },
            { name: "EducationCode", type: Number },
            { name: "WebSiteUrl", type: String },
            { name: "FamilyStatusCode", type: Number },
            { name: "FtpSiteUrl", type: String },
            { name: "EMailAddress1", type: String },
            { name: "SpousesName", type: String },
            { name: "AssistantName", type: String },
            { name: "EMailAddress2", type: String },
            { name: "AssistantPhone", type: String },
            { name: "EMailAddress3", type: String },
            { name: "DoNotPhone", type: Boolean },
            { name: "ManagerName", type: String },
            { name: "ManagerPhone", type: String },
            { name: "DoNotFax", type: Boolean },
            { name: "DoNotEMail", type: Boolean },
            { name: "DoNotPostalMail", type: Boolean },
            { name: "DoNotBulkEMail", type: Boolean },
            { name: "DoNotBulkPostalMail", type: Boolean },
            { name: "AccountRoleCode", type: Number },
            { name: "TerritoryCode", type: Number },
            { name: "IsPrivate", type: Boolean, isReadOnly: true },
            { name: "CreditLimit", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreditOnHold", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "NumberOfChildren", type: Number },
            { name: "ChildrensNames", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "MobilePhone", type: String },
            { name: "Pager", type: String },
            { name: "Telephone1", type: String },
            { name: "Telephone2", type: String },
            { name: "Telephone3", type: String },
            { name: "Fax", type: String },
            { name: "Aging30", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "Aging60", type: String, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "Aging90", type: String, isReadOnly: true },
            { name: "ParentContactId", type: String, isReadOnly: true },
            { name: "Address1_AddressTypeCode", type: Number },
            { name: "Address1_Name", type: String },
            { name: "Address1_PrimaryContactName", type: String },
            { name: "Address1_Line1", type: String },
            { name: "Address1_Line2", type: String },
            { name: "Address1_Line3", type: String },
            { name: "Address1_City", type: String },
            { name: "Address1_StateOrProvince", type: String },
            { name: "Address1_County", type: String },
            { name: "Address1_Country", type: String },
            { name: "Address1_PostOfficeBox", type: String },
            { name: "Address1_PostalCode", type: String },
            { name: "Address1_UTCOffset", type: Number },
            { name: "Address1_FreightTermsCode", type: Number },
            { name: "Address1_UPSZone", type: String },
            { name: "Address1_Latitude", type: Number },
            { name: "Address1_Telephone1", type: String },
            { name: "Address1_Longitude", type: Number },
            { name: "Address1_ShippingMethodCode", type: Number },
            { name: "Address1_Telephone2", type: String },
            { name: "Address1_Telephone3", type: String },
            { name: "Address1_Fax", type: String },
            { name: "Address2_AddressTypeCode", type: Number },
            { name: "Address2_Name", type: String },
            { name: "Address2_PrimaryContactName", type: String },
            { name: "Address2_Line1", type: String },
            { name: "Address2_Line2", type: String },
            { name: "Address2_Line3", type: String },
            { name: "Address2_City", type: String },
            { name: "Address2_StateOrProvince", type: String },
            { name: "Address2_County", type: String },
            { name: "Address2_Country", type: String },
            { name: "Address2_PostOfficeBox", type: String },
            { name: "Address2_PostalCode", type: String },
            { name: "Address2_UTCOffset", type: Number },
            { name: "Address2_FreightTermsCode", type: Number },
            { name: "Address2_UPSZone", type: String },
            { name: "Address2_Latitude", type: Number },
            { name: "Address2_Telephone1", type: String },
            { name: "Address2_Longitude", type: Number },
            { name: "Address2_ShippingMethodCode", type: Number },
            { name: "Address2_Telephone2", type: String },
            { name: "Address2_Telephone3", type: String },
            { name: "Address2_Fax", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "PreferredSystemUserId", type: String },
            { name: "PreferredServiceId", type: String },
            { name: "PreferredAppointmentDayCode", type: Number },
            { name: "PreferredAppointmentTimeCode", type: Number },
            { name: "DoNotSendMM", type: Boolean },
            { name: "Merged", type: Boolean, isReadOnly: true },
            { name: "ExternalUserIdentifier", type: String },
            { name: "SubscriptionId", type: String, isReadOnly: true },
            { name: "PreferredEquipmentId", type: String },
            { name: "LastUsedInCampaign", type: Date },
            { name: "TransactionCurrencyId", type: String },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "AnnualIncome_Base", type: String, isReadOnly: true },
            { name: "CreditLimit_Base", type: String, isReadOnly: true },
            { name: "Aging60_Base", type: String, isReadOnly: true },
            { name: "Aging90_Base", type: String, isReadOnly: true },
            { name: "Aging30_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "IsAutoCreate", type: Boolean, isReadOnly: true },
            { name: "team_contacts", kind: "reference", type: Team },
            { name: "contact_originating_lead", kind: "reference", type: Lead },
            { name: "price_level_contacts", kind: "reference", type: PriceLevel },
            { name: "account_primary_contacts", kind: "collection", elementType: Account },
            { name: "contact_customer_accounts", kind: "reference", type: Account },
            { name: "contactleads_associations", kind: "collection", elementType: ContactLead },
            { name: "contactorders_associations", kind: "collection", elementType: ContactOrder },
            { name: "contact_master_contact", kind: "reference", type: Contact },
            { name: "contact_master_contacts", kind: "collection", elementType: Contact }
        ]),

        ContractDetail: $defineEntity(ContractDetail, [
            { name: "Title", type: String },
            { name: "ContractDetailId", type: String, isReadOnly: true },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "ServiceAddress", type: String },
            { name: "ProductSerialNumber", type: String },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "LineItemOrder", type: Number },
            { name: "ServiceContractUnitsCode", type: Number },
            { name: "InitialQuantity", type: Number },
            { name: "EffectivityCalendar", type: String },
            { name: "ActiveOn", type: Date },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ExpiresOn", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "TotalAllotments", type: Number },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Rate", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "Price", type: String },
            { name: "Discount", type: String },
            { name: "Net", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "AllotmentsRemaining", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "AllotmentsUsed", type: Number, isReadOnly: true },
            { name: "ContractStateCode", type: Number, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "DiscountPercentage", type: String },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "Discount_Base", type: String, isReadOnly: true },
            { name: "Rate_Base", type: String, isReadOnly: true },
            { name: "Price_Base", type: String, isReadOnly: true },
            { name: "Net_Base", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "AllotmentsOverage", type: Number, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_contract_line_items", kind: "reference", type: UoM },
            { name: "contract_detail_unit_of_measure_schedule", kind: "reference", type: UoMSchedule },
            { name: "product_contract_line_items", kind: "reference", type: Product },
            { name: "contractlineitem_customer_accounts", kind: "reference", type: Account },
            { name: "contract_line_items", kind: "reference", type: Contract }
        ]),

        Contract: $defineEntity(Contract, [
            { name: "Title", type: String },
            { name: "ContractId", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "ContractTemplateId", type: String },
            { name: "ContractServiceLevelCode", type: Number },
            { name: "ServiceAddress", type: String },
            { name: "BillToAddress", type: String },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "BillingAccountId", type: String, isReadOnly: true },
            { name: "ContractNumber", type: String, isReadOnly: true },
            { name: "BillingContactId", type: String, isReadOnly: true },
            { name: "ActiveOn", type: Date },
            { name: "ExpiresOn", type: Date },
            { name: "CancelOn", type: Date, isReadOnly: true },
            { name: "ContractLanguage", type: String },
            { name: "BillingStartOn", type: Date },
            { name: "EffectivityCalendar", type: String },
            { name: "BillingEndOn", type: Date },
            { name: "BillingFrequencyCode", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "AllotmentTypeCode", type: Number },
            { name: "UseDiscountAsPercentage", type: Boolean, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "TotalPrice", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "TotalDiscount", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "NetPrice", type: String, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "Duration", type: Number, isReadOnly: true },
            { name: "ContractTemplateAbbreviation", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "TotalDiscount_Base", type: String, isReadOnly: true },
            { name: "NetPrice_Base", type: String, isReadOnly: true },
            { name: "TotalPrice_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "team_service_contracts", kind: "reference", type: Team },
            { name: "contract_billingcustomer_accounts", kind: "reference", type: Account },
            { name: "contract_customer_accounts", kind: "reference", type: Account },
            { name: "contract_originating_contract", kind: "reference", type: Contract },
            { name: "contract_originating_contracts", kind: "collection", elementType: Contract },
            { name: "Contract_line_items", kind: "collection", elementType: ContractDetail }
        ]),

        InvoiceDetail: $defineEntity(InvoiceDetail, [
            { name: "InvoiceDetailId", type: String, isReadOnly: true },
            { name: "SalesRepId", type: String },
            { name: "IsProductOverridden", type: Boolean },
            { name: "LineItemNumber", type: Number },
            { name: "IsCopied", type: Boolean },
            { name: "QuantityBackordered", type: String },
            { name: "ActualDeliveryOn", type: Date },
            { name: "Quantity", type: String },
            { name: "ManualDiscountAmount", type: String },
            { name: "ProductDescription", type: String },
            { name: "VolumeDiscountAmount", type: String, isReadOnly: true },
            { name: "PricePerUnit", type: String },
            { name: "BaseAmount", type: String, isReadOnly: true },
            { name: "QuantityCancelled", type: String },
            { name: "ShippingTrackingNumber", type: String },
            { name: "ExtendedAmount", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "IsPriceOverridden", type: Boolean },
            { name: "ShipTo_Name", type: String },
            { name: "PricingErrorCode", type: Number },
            { name: "Tax", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ShipTo_Line1", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ShipTo_Line2", type: String },
            { name: "ShipTo_Line3", type: String },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ShipTo_City", type: String },
            { name: "ShipTo_StateOrProvince", type: String },
            { name: "ShipTo_Country", type: String },
            { name: "ShipTo_PostalCode", type: String },
            { name: "WillCall", type: Boolean },
            { name: "ShipTo_Telephone", type: String },
            { name: "ShipTo_Fax", type: String },
            { name: "ShipTo_FreightTermsCode", type: Number },
            { name: "QuantityShipped", type: String },
            { name: "InvoiceStateCode", type: Number, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "InvoiceIsPriceLocked", type: Boolean, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "VolumeDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "BaseAmount_Base", type: String, isReadOnly: true },
            { name: "PricePerUnit_Base", type: String, isReadOnly: true },
            { name: "Tax_Base", type: String, isReadOnly: true },
            { name: "ExtendedAmount_Base", type: String, isReadOnly: true },
            { name: "ManualDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_invoice_details", kind: "reference", type: UoM },
            { name: "invoice_details", kind: "reference", type: Invoice },
            { name: "product_invoice_details", kind: "reference", type: Product }
        ]),

        Invoice: $defineEntity(Invoice, [
            { name: "Name", type: String },
            { name: "InvoiceId", type: String, isReadOnly: true },
            { name: "PriorityCode", type: Number },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "LastBackofficeSubmit", type: Date },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "InvoiceNumber", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "DiscountAmount", type: String },
            { name: "FreightAmount", type: String },
            { name: "TotalAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemDiscountAmount", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount", type: String, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "TotalTax", type: String, isReadOnly: true },
            { name: "ShippingMethodCode", type: Number },
            { name: "PaymentTermsCode", type: Number },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "ShipTo_Name", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "PricingErrorCode", type: Number },
            { name: "ShipTo_Line1", type: String },
            { name: "ShipTo_Line2", type: String },
            { name: "ShipTo_Line3", type: String },
            { name: "ShipTo_City", type: String },
            { name: "ShipTo_StateOrProvince", type: String },
            { name: "ShipTo_Country", type: String },
            { name: "ShipTo_PostalCode", type: String },
            { name: "WillCall", type: Boolean },
            { name: "ShipTo_Telephone", type: String },
            { name: "BillTo_Name", type: String },
            { name: "ShipTo_FreightTermsCode", type: Number },
            { name: "ShipTo_Fax", type: String },
            { name: "BillTo_Line1", type: String },
            { name: "BillTo_Line2", type: String },
            { name: "BillTo_Line3", type: String },
            { name: "BillTo_City", type: String },
            { name: "BillTo_StateOrProvince", type: String },
            { name: "BillTo_Country", type: String },
            { name: "BillTo_PostalCode", type: String },
            { name: "BillTo_Telephone", type: String },
            { name: "BillTo_Fax", type: String },
            { name: "DiscountPercentage", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "IsPriceLocked", type: Boolean, isReadOnly: true },
            { name: "DateDelivered", type: Date },
            { name: "DueDate", type: Date },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount_Base", type: String, isReadOnly: true },
            { name: "TotalLineItemDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalTax_Base", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight_Base", type: String, isReadOnly: true },
            { name: "DiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalAmount_Base", type: String, isReadOnly: true },
            { name: "FreightAmount_Base", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "order_invoices", kind: "reference", type: SalesOrder },
            { name: "team_invoices", kind: "reference", type: Team },
            { name: "invoice_customer_accounts", kind: "reference", type: Account },
            { name: "opportunity_invoices", kind: "reference", type: Opportunity },
            { name: "price_level_invoices", kind: "reference", type: PriceLevel },
            { name: "Invoice_details", kind: "collection", elementType: InvoiceDetail }
        ]),

        LeadCompetitor: $defineEntity(LeadCompetitor, [
            { name: "LeadCompetitorId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "leadcompetitors_association_lead", kind: "reference", type: Lead },
            { name: "leadcompetitors_association_competitor", kind: "reference", type: Competitor }
        ]),

        LeadProduct: $defineEntity(LeadProduct, [
            { name: "LeadProductId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "leadproduct_association_lead", kind: "reference", type: Lead },
            { name: "leadproduct_association_product", kind: "reference", type: Product }
        ]),

        Lead: $defineEntity(Lead, [
            { name: "FullName", type: String, isReadOnly: true },
            { name: "LeadId", type: String, isReadOnly: true },
            { name: "Address1_AddressId", type: String },
            { name: "Address2_AddressId", type: String },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "LeadSourceCode", type: Number },
            { name: "LeadQualityCode", type: Number },
            { name: "PriorityCode", type: Number },
            { name: "IndustryCode", type: Number },
            { name: "PreferredContactMethodCode", type: Number },
            { name: "SalesStageCode", type: Number },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "Subject", type: String },
            { name: "ParticipatesInWorkflow", type: Boolean },
            { name: "Description", type: String },
            { name: "EstimatedValue", type: Number },
            { name: "EstimatedCloseDate", type: Date },
            { name: "CompanyName", type: String },
            { name: "FirstName", type: String },
            { name: "MiddleName", type: String },
            { name: "LastName", type: String },
            { name: "Revenue", type: String },
            { name: "NumberOfEmployees", type: Number },
            { name: "DoNotPhone", type: Boolean },
            { name: "SIC", type: String },
            { name: "DoNotFax", type: Boolean },
            { name: "EMailAddress1", type: String },
            { name: "JobTitle", type: String },
            { name: "Salutation", type: String },
            { name: "DoNotEMail", type: Boolean },
            { name: "EMailAddress2", type: String },
            { name: "DoNotPostalMail", type: Boolean },
            { name: "EMailAddress3", type: String },
            { name: "YomiFirstName", type: String },
            { name: "WebSiteUrl", type: String },
            { name: "Telephone1", type: String },
            { name: "Telephone2", type: String },
            { name: "Telephone3", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "IsPrivate", type: Boolean, isReadOnly: true },
            { name: "Fax", type: String },
            { name: "YomiMiddleName", type: String },
            { name: "YomiLastName", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "YomiFullName", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "MobilePhone", type: String },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "Pager", type: String },
            { name: "StatusCode", type: Number },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "Address1_AddressTypeCode", type: Number },
            { name: "Address1_Name", type: String },
            { name: "Address1_Line1", type: String },
            { name: "Address1_Line2", type: String },
            { name: "Address1_Line3", type: String },
            { name: "Address1_City", type: String },
            { name: "Address1_StateOrProvince", type: String },
            { name: "Address1_County", type: String },
            { name: "Address1_Country", type: String },
            { name: "Address1_PostOfficeBox", type: String },
            { name: "Address1_PostalCode", type: String },
            { name: "Address1_UTCOffset", type: Number },
            { name: "Address1_UPSZone", type: String },
            { name: "Address1_Latitude", type: Number },
            { name: "Address1_Telephone1", type: String },
            { name: "Address1_Longitude", type: Number },
            { name: "Address1_ShippingMethodCode", type: Number },
            { name: "Address1_Telephone2", type: String },
            { name: "Address1_Telephone3", type: String },
            { name: "Address1_Fax", type: String },
            { name: "Address2_AddressTypeCode", type: Number },
            { name: "Address2_Name", type: String },
            { name: "Address2_Line1", type: String },
            { name: "Address2_Line2", type: String },
            { name: "Address2_Line3", type: String },
            { name: "Address2_City", type: String },
            { name: "Address2_StateOrProvince", type: String },
            { name: "Address2_County", type: String },
            { name: "Address2_Country", type: String },
            { name: "Address2_PostOfficeBox", type: String },
            { name: "Address2_PostalCode", type: String },
            { name: "Address2_UTCOffset", type: Number },
            { name: "Address2_UPSZone", type: String },
            { name: "Address2_Latitude", type: Number },
            { name: "Address2_Telephone1", type: String },
            { name: "Address2_Longitude", type: Number },
            { name: "Address2_ShippingMethodCode", type: Number },
            { name: "Address2_Telephone2", type: String },
            { name: "Address2_Telephone3", type: String },
            { name: "Address2_Fax", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CampaignId", type: String },
            { name: "DoNotSendMM", type: Boolean },
            { name: "Merged", type: Boolean, isReadOnly: true },
            { name: "DoNotBulkEMail", type: Boolean },
            { name: "LastUsedInCampaign", type: Date },
            { name: "TransactionCurrencyId", type: String },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "EstimatedAmount", type: String },
            { name: "EstimatedAmount_Base", type: String, isReadOnly: true },
            { name: "Revenue_Base", type: String, isReadOnly: true },
            { name: "YomiCompanyName", type: String },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "IsAutoCreate", type: Boolean, isReadOnly: true },
            { name: "lead_owning_team", kind: "reference", type: Team },
            { name: "accountleads_associations", kind: "collection", elementType: AccountLead },
            { name: "contactleads_associations", kind: "collection", elementType: ContactLead },
            { name: "leadcompetitors_associations", kind: "collection", elementType: LeadCompetitor },
            { name: "leadproduct_associations", kind: "collection", elementType: LeadProduct },
            { name: "lead_customer_accounts", kind: "reference", type: Account },
            { name: "lead_master_lead", kind: "reference", type: Lead },
            { name: "lead_master_leads", kind: "collection", elementType: Lead },
            { name: "account_originating_leads", kind: "collection", elementType: Account },
            { name: "contact_originating_leads", kind: "collection", elementType: Contact },
            { name: "opportunity_originating_leads", kind: "collection", elementType: Opportunity }
        ]),

        Opportunity: $defineEntity(Opportunity, [
            { name: "Name", type: String },
            { name: "OpportunityId", type: String, isReadOnly: true },
            { name: "OpportunityRatingCode", type: Number },
            { name: "PriorityCode", type: Number },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "StepId", type: String },
            { name: "Description", type: String },
            { name: "EstimatedValue", type: String },
            { name: "StepName", type: String },
            { name: "SalesStageCode", type: Number },
            { name: "ParticipatesInWorkflow", type: Boolean },
            { name: "PricingErrorCode", type: Number },
            { name: "EstimatedCloseDate", type: Date },
            { name: "CloseProbability", type: Number },
            { name: "ActualValue", type: String },
            { name: "ActualCloseDate", type: Date },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "IsPrivate", type: Boolean, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "IsRevenueSystemCalculated", type: Boolean },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CampaignId", type: String },
            { name: "TransactionCurrencyId", type: String },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ActualValue_Base", type: String, isReadOnly: true },
            { name: "EstimatedValue_Base", type: String, isReadOnly: true },
            { name: "TotalTax", type: String, isReadOnly: true },
            { name: "DiscountPercentage", type: String },
            { name: "TotalAmount", type: String, isReadOnly: true },
            { name: "DiscountAmount", type: String },
            { name: "TotalAmountLessFreight", type: String, isReadOnly: true },
            { name: "FreightAmount", type: String },
            { name: "TotalLineItemDiscountAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount_Base", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalTax_Base", type: String, isReadOnly: true },
            { name: "DiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalLineItemDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalAmount_Base", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight_Base", type: String, isReadOnly: true },
            { name: "FreightAmount_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "Opportunity_quotes", kind: "collection", elementType: Quote },
            { name: "Opportunity_sales_orders", kind: "collection", elementType: SalesOrder },
            { name: "team_opportunities", kind: "reference", type: Team },
            { name: "Opportunity_invoices", kind: "collection", elementType: Invoice },
            { name: "opportunity_originating_lead", kind: "reference", type: Lead },
            { name: "opportunitycompetitors_associations", kind: "collection", elementType: OpportunityCompetitor },
            { name: "opportunity_customer_accounts", kind: "reference", type: Account },
            { name: "price_level_opportunties", kind: "reference", type: PriceLevel },
            { name: "Opportunity_OpportunityCloses", kind: "collection", elementType: OpportunityClose },
            { name: "Product_opportunities", kind: "collection", elementType: OpportunityProduct }
        ]),

        OpportunityClose: $defineEntity(OpportunityClose, [
            { name: "Subject", type: String },
            { name: "ActivityId", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ActualStart", type: Date },
            { name: "ActualDurationMinutes", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ActualRevenue", type: String },
            { name: "ScheduledStart", type: Date },
            { name: "IsWorkflowCreated", type: Boolean },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "ServiceId", type: String },
            { name: "IsBilled", type: Boolean },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "ActualEnd", type: Date },
            { name: "ScheduledEnd", type: Date },
            { name: "Category", type: String },
            { name: "ScheduledDurationMinutes", type: Number, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "Subcategory", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ActualRevenue_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ActivityTypeCode", type: String, isReadOnly: true },
            { name: "IsRegularActivity", type: Boolean, isReadOnly: true },
            { name: "team_opportunityclose", kind: "reference", type: Team },
            { name: "Opportunity_OpportunityClose", kind: "reference", type: Opportunity },
            { name: "competitor_opportunity_activities", kind: "reference", type: Competitor }
        ]),

        OpportunityCompetitor: $defineEntity(OpportunityCompetitor, [
            { name: "OpportunityCompetitorId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "opportunitycompetitors_association_opportunity", kind: "reference", type: Opportunity },
            { name: "opportunitycompetitors_association_competitor", kind: "reference", type: Competitor }
        ]),

        OpportunityProduct: $defineEntity(OpportunityProduct, [
            { name: "OpportunityProductId", type: String, isReadOnly: true },
            { name: "PricingErrorCode", type: Number },
            { name: "IsProductOverridden", type: Boolean },
            { name: "IsPriceOverridden", type: Boolean },
            { name: "PricePerUnit", type: String },
            { name: "BaseAmount", type: String, isReadOnly: true },
            { name: "ExtendedAmount", type: String, isReadOnly: true },
            { name: "ManualDiscountAmount", type: String },
            { name: "Quantity", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "VolumeDiscountAmount", type: String, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Tax", type: String },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ProductDescription", type: String },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "Description", type: String },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "OpportunityStateCode", type: Number, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "BaseAmount_Base", type: String, isReadOnly: true },
            { name: "ManualDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "VolumeDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "PricePerUnit_Base", type: String, isReadOnly: true },
            { name: "Tax_Base", type: String, isReadOnly: true },
            { name: "ExtendedAmount_Base", type: String, isReadOnly: true },
            { name: "LineItemNumber", type: Number },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_opportunity_products", kind: "reference", type: UoM },
            { name: "product_opportunities", kind: "reference", type: Opportunity },
            { name: "opportunity_products", kind: "reference", type: Product }
        ]),

        PriceLevel: $defineEntity(PriceLevel, [
            { name: "Name", type: String },
            { name: "PriceLevelId", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "ShippingMethodCode", type: Number },
            { name: "BeginDate", type: Date },
            { name: "PaymentMethodCode", type: Number },
            { name: "FreightTermsCode", type: Number },
            { name: "EndDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "Price_level_quotes", kind: "collection", elementType: Quote },
            { name: "Price_level_orders", kind: "collection", elementType: SalesOrder },
            { name: "Price_level_invoices", kind: "collection", elementType: Invoice },
            { name: "Price_level_opportunties", kind: "collection", elementType: Opportunity },
            { name: "Price_level_accounts", kind: "collection", elementType: Account },
            { name: "Price_level_contacts", kind: "collection", elementType: Contact },
            { name: "Price_level_products", kind: "collection", elementType: Product }
        ]),

        Product: $defineEntity(Product, [
            { name: "Name", type: String },
            { name: "ProductId", type: String, isReadOnly: true },
            { name: "SubjectId", type: String },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "ProductTypeCode", type: Number },
            { name: "ProductUrl", type: String },
            { name: "Price", type: String },
            { name: "IsKit", type: Boolean },
            { name: "ProductNumber", type: String },
            { name: "Size", type: String },
            { name: "CurrentCost", type: String },
            { name: "StockVolume", type: String },
            { name: "StandardCost", type: String },
            { name: "StockWeight", type: String },
            { name: "QuantityDecimal", type: Number },
            { name: "QuantityOnHand", type: String },
            { name: "IsStockItem", type: Boolean },
            { name: "SupplierName", type: String },
            { name: "VendorName", type: String },
            { name: "VendorPartNumber", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "CurrentCost_Base", type: String, isReadOnly: true },
            { name: "Price_Base", type: String, isReadOnly: true },
            { name: "StandardCost_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_products", kind: "reference", type: UoM },
            { name: "unit_of_measurement_schedule_products", kind: "reference", type: UoMSchedule },
            { name: "Product_quote_details", kind: "collection", elementType: QuoteDetail },
            { name: "Product_order_details", kind: "collection", elementType: SalesOrderDetail },
            { name: "Product_invoice_details", kind: "collection", elementType: InvoiceDetail },
            { name: "leadproduct_associations", kind: "collection", elementType: LeadProduct },
            { name: "Opportunity_products", kind: "collection", elementType: OpportunityProduct },
            { name: "price_level_products", kind: "reference", type: PriceLevel },
            { name: "competitorproduct_associations", kind: "collection", elementType: CompetitorProduct },
            { name: "Product_contract_line_items", kind: "collection", elementType: ContractDetail }
        ]),

        Queue: $defineEntity(Queue, [
            { name: "Name", type: String },
            { name: "QueueId", type: String, isReadOnly: true },
            { name: "BusinessUnitId", type: String },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "EMailAddress", type: String },
            { name: "PrimaryUserId", type: String },
            { name: "QueueTypeCode", type: Number, isReadOnly: true },
            { name: "Description", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "IgnoreUnsolicitedEmail", type: Boolean },
            { name: "IsFaxQueue", type: Boolean, isReadOnly: true },
            { name: "EmailPassword", type: String },
            { name: "IncomingEmailDeliveryMethod", type: Number },
            { name: "EmailUsername", type: String },
            { name: "OutgoingEmailDeliveryMethod", type: Number },
            { name: "AllowEmailCredentials", type: Boolean },
            { name: "IncomingEmailFilteringMethod", type: Number },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OwningTeam", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "EmailRouterAccessApproval", type: Number },
            { name: "queue_teams", kind: "collection", elementType: Team }
        ]),

        QuoteClose: $defineEntity(QuoteClose, [
            { name: "Subject", type: String },
            { name: "ActivityId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "IsWorkflowCreated", type: Boolean },
            { name: "Description", type: String },
            { name: "Revision", type: Number },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "Subcategory", type: String },
            { name: "IsBilled", type: Boolean },
            { name: "StatusCode", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ScheduledEnd", type: Date },
            { name: "QuoteNumber", type: String },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "ServiceId", type: String },
            { name: "ActualEnd", type: Date },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Category", type: String },
            { name: "ActualDurationMinutes", type: Number },
            { name: "ScheduledStart", type: Date },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "ScheduledDurationMinutes", type: Number, isReadOnly: true },
            { name: "ActualStart", type: Date },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ActivityTypeCode", type: String, isReadOnly: true },
            { name: "IsRegularActivity", type: Boolean, isReadOnly: true },
            { name: "Quote_QuoteClose", kind: "reference", type: Quote },
            { name: "team_quoteclose", kind: "reference", type: Team }
        ]),

        QuoteDetail: $defineEntity(QuoteDetail, [
            { name: "QuoteDetailId", type: String, isReadOnly: true },
            { name: "SalesRepId", type: String },
            { name: "LineItemNumber", type: Number },
            { name: "RequestDeliveryBy", type: Date },
            { name: "Quantity", type: String },
            { name: "PricingErrorCode", type: Number },
            { name: "ManualDiscountAmount", type: String },
            { name: "ProductDescription", type: String },
            { name: "VolumeDiscountAmount", type: String, isReadOnly: true },
            { name: "PricePerUnit", type: String },
            { name: "BaseAmount", type: String, isReadOnly: true },
            { name: "ExtendedAmount", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "ShipTo_Name", type: String },
            { name: "IsPriceOverridden", type: Boolean },
            { name: "Tax", type: String },
            { name: "ShipTo_Line1", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ShipTo_Line2", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ShipTo_Line3", type: String },
            { name: "ShipTo_City", type: String },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ShipTo_StateOrProvince", type: String },
            { name: "ShipTo_Country", type: String },
            { name: "ShipTo_PostalCode", type: String },
            { name: "WillCall", type: Boolean },
            { name: "IsProductOverridden", type: Boolean },
            { name: "ShipTo_Telephone", type: String },
            { name: "ShipTo_Fax", type: String },
            { name: "ShipTo_FreightTermsCode", type: Number },
            { name: "QuoteStateCode", type: Number, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "ShipTo_AddressId", type: String },
            { name: "ShipTo_ContactName", type: String },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "Tax_Base", type: String, isReadOnly: true },
            { name: "ExtendedAmount_Base", type: String, isReadOnly: true },
            { name: "PricePerUnit_Base", type: String, isReadOnly: true },
            { name: "BaseAmount_Base", type: String, isReadOnly: true },
            { name: "ManualDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "VolumeDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_quote_details", kind: "reference", type: UoM },
            { name: "quote_details", kind: "reference", type: Quote },
            { name: "product_quote_details", kind: "reference", type: Product }
        ]),

        Quote: $defineEntity(Quote, [
            { name: "Name", type: String },
            { name: "QuoteId", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "QuoteNumber", type: String, isReadOnly: true },
            { name: "RevisionNumber", type: Number, isReadOnly: true },
            { name: "PricingErrorCode", type: Number },
            { name: "Description", type: String },
            { name: "DiscountAmount", type: String },
            { name: "FreightAmount", type: String },
            { name: "TotalAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemDiscountAmount", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight", type: String, isReadOnly: true },
            { name: "EffectiveFrom", type: Date },
            { name: "TotalTax", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount", type: String, isReadOnly: true },
            { name: "EffectiveTo", type: Date },
            { name: "ExpiresOn", type: Date },
            { name: "ClosedOn", type: Date },
            { name: "RequestDeliveryBy", type: Date },
            { name: "ShippingMethodCode", type: Number },
            { name: "PaymentTermsCode", type: Number },
            { name: "FreightTermsCode", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "ShipTo_Name", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ShipTo_Line1", type: String },
            { name: "ShipTo_Line2", type: String },
            { name: "ShipTo_Line3", type: String },
            { name: "ShipTo_City", type: String },
            { name: "ShipTo_StateOrProvince", type: String },
            { name: "ShipTo_Country", type: String },
            { name: "ShipTo_PostalCode", type: String },
            { name: "WillCall", type: Boolean },
            { name: "ShipTo_Telephone", type: String },
            { name: "BillTo_Name", type: String },
            { name: "ShipTo_FreightTermsCode", type: Number },
            { name: "ShipTo_Fax", type: String },
            { name: "BillTo_Line1", type: String },
            { name: "BillTo_Line2", type: String },
            { name: "BillTo_Line3", type: String },
            { name: "BillTo_City", type: String },
            { name: "BillTo_StateOrProvince", type: String },
            { name: "BillTo_Country", type: String },
            { name: "BillTo_PostalCode", type: String },
            { name: "BillTo_Telephone", type: String },
            { name: "BillTo_Fax", type: String },
            { name: "DiscountPercentage", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CampaignId", type: String },
            { name: "ShipTo_AddressId", type: String },
            { name: "ShipTo_ContactName", type: String },
            { name: "BillTo_AddressId", type: String },
            { name: "BillTo_ContactName", type: String },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "UniqueDscId", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TransactionCurrencyId", type: String },
            { name: "TotalLineItemDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight_Base", type: String, isReadOnly: true },
            { name: "DiscountAmount_Base", type: String, isReadOnly: true },
            { name: "FreightAmount_Base", type: String, isReadOnly: true },
            { name: "TotalAmount_Base", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalTax_Base", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "quote_customer_accounts", kind: "reference", type: Account },
            { name: "opportunity_quotes", kind: "reference", type: Opportunity },
            { name: "team_quotes", kind: "reference", type: Team },
            { name: "price_level_quotes", kind: "reference", type: PriceLevel },
            { name: "Quote_QuoteCloses", kind: "collection", elementType: QuoteClose },
            { name: "Quote_details", kind: "collection", elementType: QuoteDetail },
            { name: "Quote_orders", kind: "collection", elementType: SalesOrder }
        ]),

        Role: $defineEntity(Role, [
            { name: "Name", type: String },
            { name: "RoleId", type: String, isReadOnly: true },
            { name: "RoleTemplateId", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "BusinessUnitId", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverwriteTime", type: Date, isReadOnly: true },
            { name: "SupportingSolutionId", type: String, isReadOnly: true },
            { name: "ComponentState", type: Number, isReadOnly: true },
            { name: "SolutionId", type: String, isReadOnly: true },
            { name: "RoleIdUnique", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "IsManaged", type: Boolean, isReadOnly: true },
            { name: "IsCustomizable", type: Boolean },
            { name: "teamroles_associations", kind: "collection", elementType: TeamRole },
            { name: "role_parent_role", kind: "reference", type: Role },
            { name: "role_parent_roles", kind: "collection", elementType: Role },
            { name: "role_parent_root_role", kind: "reference", type: Role },
            { name: "role_parent_root_roles", kind: "collection", elementType: Role }
        ]),

        SalesOrderDetail: $defineEntity(SalesOrderDetail, [
            { name: "SalesOrderDetailId", type: String, isReadOnly: true },
            { name: "SalesRepId", type: String },
            { name: "IsProductOverridden", type: Boolean },
            { name: "IsCopied", type: Boolean },
            { name: "QuantityShipped", type: String },
            { name: "LineItemNumber", type: Number },
            { name: "QuantityBackordered", type: String },
            { name: "QuantityCancelled", type: String },
            { name: "RequestDeliveryBy", type: Date },
            { name: "Quantity", type: String },
            { name: "PricingErrorCode", type: Number },
            { name: "ManualDiscountAmount", type: String },
            { name: "ProductDescription", type: String },
            { name: "VolumeDiscountAmount", type: String, isReadOnly: true },
            { name: "PricePerUnit", type: String },
            { name: "BaseAmount", type: String, isReadOnly: true },
            { name: "ExtendedAmount", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "IsPriceOverridden", type: Boolean },
            { name: "ShipTo_Name", type: String },
            { name: "Tax", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ShipTo_Line1", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ShipTo_Line2", type: String },
            { name: "ShipTo_Line3", type: String },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ShipTo_City", type: String },
            { name: "ShipTo_StateOrProvince", type: String },
            { name: "ShipTo_Country", type: String },
            { name: "ShipTo_PostalCode", type: String },
            { name: "WillCall", type: Boolean },
            { name: "ShipTo_Telephone", type: String },
            { name: "ShipTo_Fax", type: String },
            { name: "ShipTo_FreightTermsCode", type: Number },
            { name: "SalesOrderStateCode", type: Number, isReadOnly: true },
            { name: "ShipTo_ContactName", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "SalesOrderIsPriceLocked", type: Boolean, isReadOnly: true },
            { name: "ShipTo_AddressId", type: String },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "BaseAmount_Base", type: String, isReadOnly: true },
            { name: "PricePerUnit_Base", type: String, isReadOnly: true },
            { name: "VolumeDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "ExtendedAmount_Base", type: String, isReadOnly: true },
            { name: "Tax_Base", type: String, isReadOnly: true },
            { name: "ManualDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_order_details", kind: "reference", type: UoM },
            { name: "order_details", kind: "reference", type: SalesOrder },
            { name: "product_order_details", kind: "reference", type: Product }
        ]),

        SalesOrder: $defineEntity(SalesOrder, [
            { name: "Name", type: String },
            { name: "SalesOrderId", type: String, isReadOnly: true },
            { name: "PriorityCode", type: Number },
            { name: "SubmitStatus", type: Number },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "SubmitDate", type: Date },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "SubmitStatusDescription", type: String },
            { name: "LastBackofficeSubmit", type: Date },
            { name: "AccountId", type: String, isReadOnly: true },
            { name: "ContactId", type: String, isReadOnly: true },
            { name: "OrderNumber", type: String, isReadOnly: true },
            { name: "PricingErrorCode", type: Number },
            { name: "Description", type: String },
            { name: "DiscountAmount", type: String },
            { name: "FreightAmount", type: String },
            { name: "TotalAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemAmount", type: String, isReadOnly: true },
            { name: "TotalLineItemDiscountAmount", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount", type: String, isReadOnly: true },
            { name: "RequestDeliveryBy", type: Date },
            { name: "TotalTax", type: String, isReadOnly: true },
            { name: "ShippingMethodCode", type: Number },
            { name: "PaymentTermsCode", type: Number },
            { name: "FreightTermsCode", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "ShipTo_Name", type: String },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ShipTo_Line1", type: String },
            { name: "ShipTo_Line2", type: String },
            { name: "ShipTo_Line3", type: String },
            { name: "ShipTo_City", type: String },
            { name: "ShipTo_StateOrProvince", type: String },
            { name: "ShipTo_Country", type: String },
            { name: "ShipTo_PostalCode", type: String },
            { name: "WillCall", type: Boolean },
            { name: "ShipTo_Telephone", type: String },
            { name: "BillTo_Name", type: String },
            { name: "ShipTo_FreightTermsCode", type: Number },
            { name: "ShipTo_Fax", type: String },
            { name: "BillTo_Line1", type: String },
            { name: "BillTo_Line2", type: String },
            { name: "BillTo_Line3", type: String },
            { name: "BillTo_City", type: String },
            { name: "BillTo_StateOrProvince", type: String },
            { name: "BillTo_Country", type: String },
            { name: "BillTo_PostalCode", type: String },
            { name: "BillTo_Telephone", type: String },
            { name: "BillTo_Fax", type: String },
            { name: "DiscountPercentage", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "BillTo_ContactName", type: String },
            { name: "CampaignId", type: String },
            { name: "BillTo_AddressId", type: String },
            { name: "ShipTo_AddressId", type: String },
            { name: "IsPriceLocked", type: Boolean, isReadOnly: true },
            { name: "DateFulfilled", type: Date },
            { name: "ShipTo_ContactName", type: String },
            { name: "UTCConversionTimeZoneCode", type: Number },
            { name: "TransactionCurrencyId", type: String, isReadOnly: true },
            { name: "TimeZoneRuleVersionNumber", type: Number },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "TotalLineItemAmount_Base", type: String, isReadOnly: true },
            { name: "TotalDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalAmountLessFreight_Base", type: String, isReadOnly: true },
            { name: "TotalAmount_Base", type: String, isReadOnly: true },
            { name: "DiscountAmount_Base", type: String, isReadOnly: true },
            { name: "FreightAmount_Base", type: String, isReadOnly: true },
            { name: "TotalLineItemDiscountAmount_Base", type: String, isReadOnly: true },
            { name: "TotalTax_Base", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "quote_orders", kind: "reference", type: Quote },
            { name: "contactorders_associations", kind: "collection", elementType: ContactOrder },
            { name: "order_customer_accounts", kind: "reference", type: Account },
            { name: "opportunity_sales_orders", kind: "reference", type: Opportunity },
            { name: "team_orders", kind: "reference", type: Team },
            { name: "price_level_orders", kind: "reference", type: PriceLevel },
            { name: "Order_invoices", kind: "collection", elementType: Invoice },
            { name: "Order_details", kind: "collection", elementType: SalesOrderDetail }
        ]),

        SdkMessagePair: $defineEntity(SdkMessagePair, [
            { name: "SdkMessagePairId", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "CustomizationLevel", type: Number, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "SdkMessagePairIdUnique", type: String, isReadOnly: true },
            { name: "Endpoint", type: String },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "c_Namespace", type: String },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "message_sdkmessagepair", kind: "reference", type: SdkMessage },
            { name: "messagepair_sdkmessagerequests", kind: "collection", elementType: SdkMessageRequest }
        ]),

        SdkMessageRequest: $defineEntity(SdkMessageRequest, [
            { name: "SdkMessageRequestId", type: String, isReadOnly: true },
            { name: "CustomizationLevel", type: Number, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "SdkMessageRequestIdUnique", type: String, isReadOnly: true },
            { name: "Name", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "PrimaryObjectTypeCode", type: String, isReadOnly: true },
            { name: "messagepair_sdkmessagerequest", kind: "reference", type: SdkMessagePair },
            { name: "messagerequest_sdkmessageresponses", kind: "collection", elementType: SdkMessageResponse }
        ]),

        SdkMessageResponse: $defineEntity(SdkMessageResponse, [
            { name: "SdkMessageResponseId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "SdkMessageResponseIdUnique", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "CustomizationLevel", type: Number, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "messagerequest_sdkmessageresponse", kind: "reference", type: SdkMessageRequest }
        ]),

        SdkMessage: $defineEntity(SdkMessage, [
            { name: "Name", type: String },
            { name: "SdkMessageId", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "IsPrivate", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CategoryName", type: String },
            { name: "CustomizationLevel", type: Number, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "SdkMessageIdUnique", type: String, isReadOnly: true },
            { name: "Expand", type: Boolean },
            { name: "AutoTransact", type: Boolean },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "Availability", type: Number },
            { name: "Template", type: Boolean },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ThrottleSettings", type: String, isReadOnly: true },
            { name: "sdkmessageid_workflow_dependencies", kind: "collection", elementType: WorkflowDependency },
            { name: "message_sdkmessagepairs", kind: "collection", elementType: SdkMessagePair }
        ]),

        Solution: $defineEntity(Solution, [
            { name: "FriendlyName", type: String },
            { name: "SolutionId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "InstalledOn", type: Date, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "PublisherId", type: String },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "IsVisible", type: Boolean, isReadOnly: true },
            { name: "Description", type: String },
            { name: "IsManaged", type: Boolean, isReadOnly: true },
            { name: "UniqueName", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Version", type: String },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "PinpointSolutionId", type: String, isReadOnly: true },
            { name: "PinpointSolutionDefaultLocale", type: String, isReadOnly: true },
            { name: "PinpointPublisherId", type: String, isReadOnly: true },
            { name: "ConfigurationPageId", type: String },
            { name: "PinpointAssetId", type: String, isReadOnly: true }
        ]),

        TeamRole: $defineEntity(TeamRole, [
            { name: "TeamRoleId", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "teamroles_association_role", kind: "reference", type: Role },
            { name: "teamroles_association_team", kind: "reference", type: Team }
        ]),

        Team: $defineEntity(Team, [
            { name: "Name", type: String },
            { name: "TeamId", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "BusinessUnitId", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "EMailAddress", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "AdministratorId", type: String },
            { name: "IsDefault", type: Boolean, isReadOnly: true },
            { name: "YomiName", type: String },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "team_workflows", kind: "collection", elementType: Workflow },
            { name: "team_workflowlogs", kind: "collection", elementType: WorkflowLog },
            { name: "Team_quotes", kind: "collection", elementType: Quote },
            { name: "team_quotecloses", kind: "collection", elementType: QuoteClose },
            { name: "Team_orders", kind: "collection", elementType: SalesOrder },
            { name: "teamroles_associations", kind: "collection", elementType: TeamRole },
            { name: "queue_team", kind: "reference", type: Queue },
            { name: "Team_accounts", kind: "collection", elementType: Account },
            { name: "Team_contacts", kind: "collection", elementType: Contact },
            { name: "Team_service_contracts", kind: "collection", elementType: Contract },
            { name: "Team_invoices", kind: "collection", elementType: Invoice },
            { name: "lead_owning_teams", kind: "collection", elementType: Lead },
            { name: "Team_opportunities", kind: "collection", elementType: Opportunity },
            { name: "team_opportunitycloses", kind: "collection", elementType: OpportunityClose }
        ]),

        Territory: $defineEntity(Territory, [
            { name: "Name", type: String },
            { name: "TerritoryId", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "ManagerId", type: String },
            { name: "Description", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "TransactionCurrencyId", type: String },
            { name: "ExchangeRate", type: String, isReadOnly: true },
            { name: "Territory_accounts", kind: "collection", elementType: Account }
        ]),

        UoM: $defineEntity(UoM, [
            { name: "Name", type: String },
            { name: "UoMId", type: String, isReadOnly: true },
            { name: "Quantity", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "IsScheduleBaseUoM", type: Boolean, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "unit_of_measurement_base_unit", kind: "reference", type: UoM },
            { name: "unit_of_measurement_base_units", kind: "collection", elementType: UoM },
            { name: "unit_of_measure_schedule_conversions", kind: "reference", type: UoMSchedule },
            { name: "Unit_of_measurement_products", kind: "collection", elementType: Product },
            { name: "Unit_of_measurement_contract_line_items", kind: "collection", elementType: ContractDetail },
            { name: "Unit_of_measurement_invoice_details", kind: "collection", elementType: InvoiceDetail },
            { name: "Unit_of_measurement_opportunity_products", kind: "collection", elementType: OpportunityProduct },
            { name: "Unit_of_measurement_quote_details", kind: "collection", elementType: QuoteDetail },
            { name: "Unit_of_measurement_order_details", kind: "collection", elementType: SalesOrderDetail }
        ]),

        UoMSchedule: $defineEntity(UoMSchedule, [
            { name: "Name", type: String },
            { name: "UoMScheduleId", type: String, isReadOnly: true },
            { name: "OrganizationId", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "VersionNumber", type: String, isReadOnly: true },
            { name: "ImportSequenceNumber", type: Number, isReadOnly: true },
            { name: "BaseUoMName", type: String, isReadOnly: true },
            { name: "OverriddenCreatedOn", type: Date, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "StatusCode", type: Number },
            { name: "Unit_of_measure_schedule_conversions", kind: "collection", elementType: UoM },
            { name: "Unit_of_measurement_schedule_products", kind: "collection", elementType: Product },
            { name: "contract_detail_unit_of_measure_schedules", kind: "collection", elementType: ContractDetail }
        ]),

        WorkflowDependency: $defineEntity(WorkflowDependency, [
            { name: "WorkflowDependencyId", type: String, isReadOnly: true },
            { name: "ParameterName", type: String },
            { name: "RelatedEntityName", type: String, isReadOnly: true },
            { name: "RelatedAttributeName", type: String },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "Type", type: Number },
            { name: "EntityAttributes", type: String },
            { name: "CustomEntityName", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "DependentEntityName", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "DependentAttributeName", type: String, isReadOnly: true },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "ParameterType", type: String },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "workflow_dependencies", kind: "reference", type: Workflow },
            { name: "sdkmessageid_workflow_dependency", kind: "reference", type: SdkMessage }
        ]),

        WorkflowLog: $defineEntity(WorkflowLog, [
            { name: "WorkflowLogId", type: String, isReadOnly: true },
            { name: "AsyncOperationId", type: String, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "CompletedOn", type: Date },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "Message", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "StageName", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "StepName", type: String, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "RegardingObjectId", type: String },
            { name: "Status", type: Number },
            { name: "ErrorCode", type: Number },
            { name: "ActivityName", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "ChildWorkflowInstanceId", type: String },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "InteractionActivityResult", type: String },
            { name: "team_workflowlog", kind: "reference", type: Team }
        ]),

        Workflow: $defineEntity(Workflow, [
            { name: "Name", type: String },
            { name: "WorkflowId", type: String, isReadOnly: true },
            { name: "OnDemand", type: Boolean },
            { name: "PluginTypeId", type: String, isReadOnly: true },
            { name: "CreatedOn", type: Date, isReadOnly: true },
            { name: "Type", type: Number },
            { name: "PrimaryEntity", type: String, isReadOnly: true },
            { name: "OwnerId", type: String, isReadOnly: true },
            { name: "ModifiedOn", type: Date, isReadOnly: true },
            { name: "AsyncAutoDelete", type: Boolean },
            { name: "IsCrmUIWorkflow", type: Boolean, isReadOnly: true },
            { name: "Subprocess", type: Boolean },
            { name: "Scope", type: Number },
            { name: "StatusCode", type: Number },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "OwningBusinessUnit", type: String, isReadOnly: true },
            { name: "StateCode", type: Number, isReadOnly: true },
            { name: "OwningUser", type: String, isReadOnly: true },
            { name: "WorkflowIdUnique", type: String, isReadOnly: true },
            { name: "SupportingSolutionId", type: String, isReadOnly: true },
            { name: "SolutionId", type: String, isReadOnly: true },
            { name: "OverwriteTime", type: Date, isReadOnly: true },
            { name: "ComponentState", type: Number, isReadOnly: true },
            { name: "CreatedOnBehalfBy", type: String, isReadOnly: true },
            { name: "ModifiedOnBehalfBy", type: String, isReadOnly: true },
            { name: "Xaml", type: String },
            { name: "TriggerOnDelete", type: Boolean },
            { name: "TriggerOnCreate", type: Boolean },
            { name: "TriggerOnUpdateAttributeList", type: String },
            { name: "Category", type: Number, isReadOnly: true },
            { name: "LanguageCode", type: Number, isReadOnly: true },
            { name: "IsManaged", type: Boolean, isReadOnly: true },
            { name: "IsCustomizable", type: Boolean },
            { name: "InputParameters", type: String },
            { name: "workflow_active_workflow", kind: "reference", type: Workflow },
            { name: "workflow_active_workflows", kind: "collection", elementType: Workflow },
            { name: "team_workflow", kind: "reference", type: Team },
            { name: "workflow_parent_workflow", kind: "reference", type: Workflow },
            { name: "workflow_parent_workflows", kind: "collection", elementType: Workflow },
            { name: "Workflow_dependencies", kind: "collection", elementType: WorkflowDependency }
        ]),

        X360Configuration: $defineEntity(X360Configuration, [
            { name: "Username", type: String, isReadOnly: true },
            { name: "CredentialsUri", type: String, isReadOnly: true },
            { name: "DiscoveryUri", type: String, isReadOnly: true },
            { name: "OrganizationName", type: String, isReadOnly: true },
            { name: "OrganizationUri", type: String, isReadOnly: true },
            { name: "Timeout", type: String, isReadOnly: true },
            { name: "AuthenticationType", type: String, isReadOnly: true },
            { name: "LicenseKey", type: String, isReadOnly: true },
            { name: "LicenseKeyStatus", type: String, isReadOnly: true },
            { name: "LastError", type: String, isReadOnly: true }
        ]),

        DynamicsCRMData: $defineDataService(DynamicsCRMData, lightSwitchApplication.rootUri + "/DynamicsCRMData.svc", [
            { name: "AccountLeads", elementType: AccountLead },
            { name: "Accounts", elementType: Account },
            { name: "Activities", elementType: Activity },
            { name: "ActivityParties", elementType: ActivityParty },
            { name: "Attachments", elementType: Attachment },
            { name: "CompetitorProducts", elementType: CompetitorProduct },
            { name: "Competitors", elementType: Competitor },
            { name: "ContactLeads", elementType: ContactLead },
            { name: "ContactOrders", elementType: ContactOrder },
            { name: "Contacts", elementType: Contact },
            { name: "ContractDetails", elementType: ContractDetail },
            { name: "Contracts", elementType: Contract },
            { name: "InvoiceDetails", elementType: InvoiceDetail },
            { name: "Invoices", elementType: Invoice },
            { name: "LeadCompetitors", elementType: LeadCompetitor },
            { name: "LeadProducts", elementType: LeadProduct },
            { name: "Leads", elementType: Lead },
            { name: "Opportunities", elementType: Opportunity },
            { name: "OpportunityCloses", elementType: OpportunityClose },
            { name: "OpportunityCompetitors", elementType: OpportunityCompetitor },
            { name: "OpportunityProducts", elementType: OpportunityProduct },
            { name: "PriceLevels", elementType: PriceLevel },
            { name: "Products", elementType: Product },
            { name: "Queues", elementType: Queue },
            { name: "QuoteCloses", elementType: QuoteClose },
            { name: "QuoteDetails", elementType: QuoteDetail },
            { name: "Quotes", elementType: Quote },
            { name: "Roles", elementType: Role },
            { name: "SalesOrderDetails", elementType: SalesOrderDetail },
            { name: "SalesOrders", elementType: SalesOrder },
            { name: "SdkMessagePairs", elementType: SdkMessagePair },
            { name: "SdkMessageRequests", elementType: SdkMessageRequest },
            { name: "SdkMessageResponses", elementType: SdkMessageResponse },
            { name: "SdkMessages", elementType: SdkMessage },
            { name: "Solutions", elementType: Solution },
            { name: "TeamRoles", elementType: TeamRole },
            { name: "Teams", elementType: Team },
            { name: "Territories", elementType: Territory },
            { name: "UoMs", elementType: UoM },
            { name: "UoMSchedules", elementType: UoMSchedule },
            { name: "WorkflowDependencies", elementType: WorkflowDependency },
            { name: "WorkflowLogs", elementType: WorkflowLog },
            { name: "Workflows", elementType: Workflow },
            { name: "X360Configurations", elementType: X360Configuration }
        ], [
            {
                name: "AccountLeads_SingleOrDefault", value: function (AccountLeadId) {
                    return new $DataServiceQuery({ _entitySet: this.AccountLeads },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/AccountLeads(" + "AccountLeadId=" + $toODataString(AccountLeadId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetAccountLead", value: function (AccountLeadId) {
                    return new $DataServiceQuery({ _entitySet: this.AccountLeads },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetAccountLead",
                        {
                            AccountLeadId: $toODataString(AccountLeadId, "Guid?")
                        });
                }
            },
            {
                name: "Accounts_SingleOrDefault", value: function (AccountId) {
                    return new $DataServiceQuery({ _entitySet: this.Accounts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Accounts(" + "AccountId=" + $toODataString(AccountId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetAccount", value: function (AccountId) {
                    return new $DataServiceQuery({ _entitySet: this.Accounts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetAccount",
                        {
                            AccountId: $toODataString(AccountId, "Guid?")
                        });
                }
            },
            {
                name: "Activities_SingleOrDefault", value: function (ActivityId) {
                    return new $DataServiceQuery({ _entitySet: this.Activities },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Activities(" + "ActivityId=" + $toODataString(ActivityId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetActivity", value: function (ActivityId) {
                    return new $DataServiceQuery({ _entitySet: this.Activities },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetActivity",
                        {
                            ActivityId: $toODataString(ActivityId, "Guid?")
                        });
                }
            },
            {
                name: "ActivityParties_SingleOrDefault", value: function (ActivityPartyId) {
                    return new $DataServiceQuery({ _entitySet: this.ActivityParties },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/ActivityParties(" + "ActivityPartyId=" + $toODataString(ActivityPartyId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetActivityParty", value: function (ActivityPartyId) {
                    return new $DataServiceQuery({ _entitySet: this.ActivityParties },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetActivityParty",
                        {
                            ActivityPartyId: $toODataString(ActivityPartyId, "Guid?")
                        });
                }
            },
            {
                name: "Attachments_SingleOrDefault", value: function (AttachmentId) {
                    return new $DataServiceQuery({ _entitySet: this.Attachments },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Attachments(" + "AttachmentId=" + $toODataString(AttachmentId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetAttachment", value: function (AttachmentId) {
                    return new $DataServiceQuery({ _entitySet: this.Attachments },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetAttachment",
                        {
                            AttachmentId: $toODataString(AttachmentId, "Guid?")
                        });
                }
            },
            {
                name: "CompetitorProducts_SingleOrDefault", value: function (CompetitorProductId) {
                    return new $DataServiceQuery({ _entitySet: this.CompetitorProducts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/CompetitorProducts(" + "CompetitorProductId=" + $toODataString(CompetitorProductId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetCompetitorProduct", value: function (CompetitorProductId) {
                    return new $DataServiceQuery({ _entitySet: this.CompetitorProducts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetCompetitorProduct",
                        {
                            CompetitorProductId: $toODataString(CompetitorProductId, "Guid?")
                        });
                }
            },
            {
                name: "Competitors_SingleOrDefault", value: function (CompetitorId) {
                    return new $DataServiceQuery({ _entitySet: this.Competitors },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Competitors(" + "CompetitorId=" + $toODataString(CompetitorId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetCompetitor", value: function (CompetitorId) {
                    return new $DataServiceQuery({ _entitySet: this.Competitors },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetCompetitor",
                        {
                            CompetitorId: $toODataString(CompetitorId, "Guid?")
                        });
                }
            },
            {
                name: "ContactLeads_SingleOrDefault", value: function (ContactLeadId) {
                    return new $DataServiceQuery({ _entitySet: this.ContactLeads },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/ContactLeads(" + "ContactLeadId=" + $toODataString(ContactLeadId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetContactLead", value: function (ContactLeadId) {
                    return new $DataServiceQuery({ _entitySet: this.ContactLeads },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetContactLead",
                        {
                            ContactLeadId: $toODataString(ContactLeadId, "Guid?")
                        });
                }
            },
            {
                name: "ContactOrders_SingleOrDefault", value: function (ContactOrderId) {
                    return new $DataServiceQuery({ _entitySet: this.ContactOrders },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/ContactOrders(" + "ContactOrderId=" + $toODataString(ContactOrderId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetContactOrder", value: function (ContactOrderId) {
                    return new $DataServiceQuery({ _entitySet: this.ContactOrders },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetContactOrder",
                        {
                            ContactOrderId: $toODataString(ContactOrderId, "Guid?")
                        });
                }
            },
            {
                name: "Contacts_SingleOrDefault", value: function (ContactId) {
                    return new $DataServiceQuery({ _entitySet: this.Contacts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Contacts(" + "ContactId=" + $toODataString(ContactId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetContact", value: function (ContactId) {
                    return new $DataServiceQuery({ _entitySet: this.Contacts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetContact",
                        {
                            ContactId: $toODataString(ContactId, "Guid?")
                        });
                }
            },
            {
                name: "ContractDetails_SingleOrDefault", value: function (ContractDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.ContractDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/ContractDetails(" + "ContractDetailId=" + $toODataString(ContractDetailId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetContractDetail", value: function (ContractDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.ContractDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetContractDetail",
                        {
                            ContractDetailId: $toODataString(ContractDetailId, "Guid?")
                        });
                }
            },
            {
                name: "Contracts_SingleOrDefault", value: function (ContractId) {
                    return new $DataServiceQuery({ _entitySet: this.Contracts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Contracts(" + "ContractId=" + $toODataString(ContractId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetContract", value: function (ContractId) {
                    return new $DataServiceQuery({ _entitySet: this.Contracts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetContract",
                        {
                            ContractId: $toODataString(ContractId, "Guid?")
                        });
                }
            },
            {
                name: "InvoiceDetails_SingleOrDefault", value: function (InvoiceDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/InvoiceDetails(" + "InvoiceDetailId=" + $toODataString(InvoiceDetailId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetInvoiceDetail", value: function (InvoiceDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetInvoiceDetail",
                        {
                            InvoiceDetailId: $toODataString(InvoiceDetailId, "Guid?")
                        });
                }
            },
            {
                name: "Invoices_SingleOrDefault", value: function (InvoiceId) {
                    return new $DataServiceQuery({ _entitySet: this.Invoices },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Invoices(" + "InvoiceId=" + $toODataString(InvoiceId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetInvoice", value: function (InvoiceId) {
                    return new $DataServiceQuery({ _entitySet: this.Invoices },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetInvoice",
                        {
                            InvoiceId: $toODataString(InvoiceId, "Guid?")
                        });
                }
            },
            {
                name: "LeadCompetitors_SingleOrDefault", value: function (LeadCompetitorId) {
                    return new $DataServiceQuery({ _entitySet: this.LeadCompetitors },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/LeadCompetitors(" + "LeadCompetitorId=" + $toODataString(LeadCompetitorId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetLeadCompetitor", value: function (LeadCompetitorId) {
                    return new $DataServiceQuery({ _entitySet: this.LeadCompetitors },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetLeadCompetitor",
                        {
                            LeadCompetitorId: $toODataString(LeadCompetitorId, "Guid?")
                        });
                }
            },
            {
                name: "LeadProducts_SingleOrDefault", value: function (LeadProductId) {
                    return new $DataServiceQuery({ _entitySet: this.LeadProducts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/LeadProducts(" + "LeadProductId=" + $toODataString(LeadProductId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetLeadProduct", value: function (LeadProductId) {
                    return new $DataServiceQuery({ _entitySet: this.LeadProducts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetLeadProduct",
                        {
                            LeadProductId: $toODataString(LeadProductId, "Guid?")
                        });
                }
            },
            {
                name: "Leads_SingleOrDefault", value: function (LeadId) {
                    return new $DataServiceQuery({ _entitySet: this.Leads },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Leads(" + "LeadId=" + $toODataString(LeadId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetLead", value: function (LeadId) {
                    return new $DataServiceQuery({ _entitySet: this.Leads },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetLead",
                        {
                            LeadId: $toODataString(LeadId, "Guid?")
                        });
                }
            },
            {
                name: "Opportunities_SingleOrDefault", value: function (OpportunityId) {
                    return new $DataServiceQuery({ _entitySet: this.Opportunities },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Opportunities(" + "OpportunityId=" + $toODataString(OpportunityId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetOpportunity", value: function (OpportunityId) {
                    return new $DataServiceQuery({ _entitySet: this.Opportunities },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetOpportunity",
                        {
                            OpportunityId: $toODataString(OpportunityId, "Guid?")
                        });
                }
            },
            {
                name: "OpportunityCloses_SingleOrDefault", value: function (ActivityId) {
                    return new $DataServiceQuery({ _entitySet: this.OpportunityCloses },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/OpportunityCloses(" + "ActivityId=" + $toODataString(ActivityId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetOpportunityClose", value: function (ActivityId) {
                    return new $DataServiceQuery({ _entitySet: this.OpportunityCloses },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetOpportunityClose",
                        {
                            ActivityId: $toODataString(ActivityId, "Guid?")
                        });
                }
            },
            {
                name: "OpportunityCompetitors_SingleOrDefault", value: function (OpportunityCompetitorId) {
                    return new $DataServiceQuery({ _entitySet: this.OpportunityCompetitors },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/OpportunityCompetitors(" + "OpportunityCompetitorId=" + $toODataString(OpportunityCompetitorId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetOpportunityCompetitor", value: function (OpportunityCompetitorId) {
                    return new $DataServiceQuery({ _entitySet: this.OpportunityCompetitors },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetOpportunityCompetitor",
                        {
                            OpportunityCompetitorId: $toODataString(OpportunityCompetitorId, "Guid?")
                        });
                }
            },
            {
                name: "OpportunityProducts_SingleOrDefault", value: function (OpportunityProductId) {
                    return new $DataServiceQuery({ _entitySet: this.OpportunityProducts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/OpportunityProducts(" + "OpportunityProductId=" + $toODataString(OpportunityProductId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetOpportunityProduct", value: function (OpportunityProductId) {
                    return new $DataServiceQuery({ _entitySet: this.OpportunityProducts },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetOpportunityProduct",
                        {
                            OpportunityProductId: $toODataString(OpportunityProductId, "Guid?")
                        });
                }
            },
            {
                name: "PriceLevels_SingleOrDefault", value: function (PriceLevelId) {
                    return new $DataServiceQuery({ _entitySet: this.PriceLevels },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/PriceLevels(" + "PriceLevelId=" + $toODataString(PriceLevelId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetPriceLevel", value: function (PriceLevelId) {
                    return new $DataServiceQuery({ _entitySet: this.PriceLevels },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetPriceLevel",
                        {
                            PriceLevelId: $toODataString(PriceLevelId, "Guid?")
                        });
                }
            },
            {
                name: "Products_SingleOrDefault", value: function (ProductId) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Products(" + "ProductId=" + $toODataString(ProductId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetProduct", value: function (ProductId) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetProduct",
                        {
                            ProductId: $toODataString(ProductId, "Guid?")
                        });
                }
            },
            {
                name: "Queues_SingleOrDefault", value: function (QueueId) {
                    return new $DataServiceQuery({ _entitySet: this.Queues },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Queues(" + "QueueId=" + $toODataString(QueueId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetQueue", value: function (QueueId) {
                    return new $DataServiceQuery({ _entitySet: this.Queues },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetQueue",
                        {
                            QueueId: $toODataString(QueueId, "Guid?")
                        });
                }
            },
            {
                name: "QuoteCloses_SingleOrDefault", value: function (ActivityId) {
                    return new $DataServiceQuery({ _entitySet: this.QuoteCloses },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/QuoteCloses(" + "ActivityId=" + $toODataString(ActivityId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetQuoteClose", value: function (ActivityId) {
                    return new $DataServiceQuery({ _entitySet: this.QuoteCloses },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetQuoteClose",
                        {
                            ActivityId: $toODataString(ActivityId, "Guid?")
                        });
                }
            },
            {
                name: "QuoteDetails_SingleOrDefault", value: function (QuoteDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.QuoteDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/QuoteDetails(" + "QuoteDetailId=" + $toODataString(QuoteDetailId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetQuoteDetail", value: function (QuoteDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.QuoteDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetQuoteDetail",
                        {
                            QuoteDetailId: $toODataString(QuoteDetailId, "Guid?")
                        });
                }
            },
            {
                name: "Quotes_SingleOrDefault", value: function (QuoteId) {
                    return new $DataServiceQuery({ _entitySet: this.Quotes },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Quotes(" + "QuoteId=" + $toODataString(QuoteId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetQuote", value: function (QuoteId) {
                    return new $DataServiceQuery({ _entitySet: this.Quotes },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetQuote",
                        {
                            QuoteId: $toODataString(QuoteId, "Guid?")
                        });
                }
            },
            {
                name: "Roles_SingleOrDefault", value: function (RoleId) {
                    return new $DataServiceQuery({ _entitySet: this.Roles },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Roles(" + "RoleId=" + $toODataString(RoleId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetRole", value: function (RoleId) {
                    return new $DataServiceQuery({ _entitySet: this.Roles },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetRole",
                        {
                            RoleId: $toODataString(RoleId, "Guid?")
                        });
                }
            },
            {
                name: "SalesOrderDetails_SingleOrDefault", value: function (SalesOrderDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.SalesOrderDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/SalesOrderDetails(" + "SalesOrderDetailId=" + $toODataString(SalesOrderDetailId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSalesOrderDetail", value: function (SalesOrderDetailId) {
                    return new $DataServiceQuery({ _entitySet: this.SalesOrderDetails },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSalesOrderDetail",
                        {
                            SalesOrderDetailId: $toODataString(SalesOrderDetailId, "Guid?")
                        });
                }
            },
            {
                name: "SalesOrders_SingleOrDefault", value: function (SalesOrderId) {
                    return new $DataServiceQuery({ _entitySet: this.SalesOrders },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/SalesOrders(" + "SalesOrderId=" + $toODataString(SalesOrderId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSalesOrder", value: function (SalesOrderId) {
                    return new $DataServiceQuery({ _entitySet: this.SalesOrders },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSalesOrder",
                        {
                            SalesOrderId: $toODataString(SalesOrderId, "Guid?")
                        });
                }
            },
            {
                name: "SdkMessagePairs_SingleOrDefault", value: function (SdkMessagePairId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessagePairs },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/SdkMessagePairs(" + "SdkMessagePairId=" + $toODataString(SdkMessagePairId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSdkMessagePair", value: function (SdkMessagePairId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessagePairs },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSdkMessagePair",
                        {
                            SdkMessagePairId: $toODataString(SdkMessagePairId, "Guid?")
                        });
                }
            },
            {
                name: "SdkMessageRequests_SingleOrDefault", value: function (SdkMessageRequestId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessageRequests },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/SdkMessageRequests(" + "SdkMessageRequestId=" + $toODataString(SdkMessageRequestId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSdkMessageRequest", value: function (SdkMessageRequestId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessageRequests },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSdkMessageRequest",
                        {
                            SdkMessageRequestId: $toODataString(SdkMessageRequestId, "Guid?")
                        });
                }
            },
            {
                name: "SdkMessageResponses_SingleOrDefault", value: function (SdkMessageResponseId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessageResponses },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/SdkMessageResponses(" + "SdkMessageResponseId=" + $toODataString(SdkMessageResponseId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSdkMessageResponse", value: function (SdkMessageResponseId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessageResponses },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSdkMessageResponse",
                        {
                            SdkMessageResponseId: $toODataString(SdkMessageResponseId, "Guid?")
                        });
                }
            },
            {
                name: "SdkMessages_SingleOrDefault", value: function (SdkMessageId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessages },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/SdkMessages(" + "SdkMessageId=" + $toODataString(SdkMessageId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSdkMessage", value: function (SdkMessageId) {
                    return new $DataServiceQuery({ _entitySet: this.SdkMessages },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSdkMessage",
                        {
                            SdkMessageId: $toODataString(SdkMessageId, "Guid?")
                        });
                }
            },
            {
                name: "Solutions_SingleOrDefault", value: function (SolutionId) {
                    return new $DataServiceQuery({ _entitySet: this.Solutions },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Solutions(" + "SolutionId=" + $toODataString(SolutionId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetSolution", value: function (SolutionId) {
                    return new $DataServiceQuery({ _entitySet: this.Solutions },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetSolution",
                        {
                            SolutionId: $toODataString(SolutionId, "Guid?")
                        });
                }
            },
            {
                name: "TeamRoles_SingleOrDefault", value: function (TeamRoleId) {
                    return new $DataServiceQuery({ _entitySet: this.TeamRoles },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/TeamRoles(" + "TeamRoleId=" + $toODataString(TeamRoleId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetTeamRoles", value: function (TeamRoleId) {
                    return new $DataServiceQuery({ _entitySet: this.TeamRoles },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetTeamRoles",
                        {
                            TeamRoleId: $toODataString(TeamRoleId, "Guid?")
                        });
                }
            },
            {
                name: "Teams_SingleOrDefault", value: function (TeamId) {
                    return new $DataServiceQuery({ _entitySet: this.Teams },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Teams(" + "TeamId=" + $toODataString(TeamId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetTeam", value: function (TeamId) {
                    return new $DataServiceQuery({ _entitySet: this.Teams },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetTeam",
                        {
                            TeamId: $toODataString(TeamId, "Guid?")
                        });
                }
            },
            {
                name: "Territories_SingleOrDefault", value: function (TerritoryId) {
                    return new $DataServiceQuery({ _entitySet: this.Territories },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Territories(" + "TerritoryId=" + $toODataString(TerritoryId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetTerritory", value: function (TerritoryId) {
                    return new $DataServiceQuery({ _entitySet: this.Territories },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetTerritory",
                        {
                            TerritoryId: $toODataString(TerritoryId, "Guid?")
                        });
                }
            },
            {
                name: "UoMs_SingleOrDefault", value: function (UoMId) {
                    return new $DataServiceQuery({ _entitySet: this.UoMs },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/UoMs(" + "UoMId=" + $toODataString(UoMId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetUoM", value: function (UoMId) {
                    return new $DataServiceQuery({ _entitySet: this.UoMs },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetUoM",
                        {
                            UoMId: $toODataString(UoMId, "Guid?")
                        });
                }
            },
            {
                name: "UoMSchedules_SingleOrDefault", value: function (UoMScheduleId) {
                    return new $DataServiceQuery({ _entitySet: this.UoMSchedules },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/UoMSchedules(" + "UoMScheduleId=" + $toODataString(UoMScheduleId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetUoMSchedule", value: function (UoMScheduleId) {
                    return new $DataServiceQuery({ _entitySet: this.UoMSchedules },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetUoMSchedule",
                        {
                            UoMScheduleId: $toODataString(UoMScheduleId, "Guid?")
                        });
                }
            },
            {
                name: "WorkflowDependencies_SingleOrDefault", value: function (WorkflowDependencyId) {
                    return new $DataServiceQuery({ _entitySet: this.WorkflowDependencies },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/WorkflowDependencies(" + "WorkflowDependencyId=" + $toODataString(WorkflowDependencyId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetWorkflowDependency", value: function (WorkflowDependencyId) {
                    return new $DataServiceQuery({ _entitySet: this.WorkflowDependencies },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetWorkflowDependency",
                        {
                            WorkflowDependencyId: $toODataString(WorkflowDependencyId, "Guid?")
                        });
                }
            },
            {
                name: "WorkflowLogs_SingleOrDefault", value: function (WorkflowLogId) {
                    return new $DataServiceQuery({ _entitySet: this.WorkflowLogs },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/WorkflowLogs(" + "WorkflowLogId=" + $toODataString(WorkflowLogId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetWorkflowLog", value: function (WorkflowLogId) {
                    return new $DataServiceQuery({ _entitySet: this.WorkflowLogs },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetWorkflowLog",
                        {
                            WorkflowLogId: $toODataString(WorkflowLogId, "Guid?")
                        });
                }
            },
            {
                name: "Workflows_SingleOrDefault", value: function (WorkflowId) {
                    return new $DataServiceQuery({ _entitySet: this.Workflows },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/Workflows(" + "WorkflowId=" + $toODataString(WorkflowId, "Guid?") + ")"
                    );
                }
            },
            {
                name: "GetWorkflow", value: function (WorkflowId) {
                    return new $DataServiceQuery({ _entitySet: this.Workflows },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/GetWorkflow",
                        {
                            WorkflowId: $toODataString(WorkflowId, "Guid?")
                        });
                }
            },
            {
                name: "X360Configurations_SingleOrDefault", value: function (Username) {
                    return new $DataServiceQuery({ _entitySet: this.X360Configurations },
                        lightSwitchApplication.rootUri + "/DynamicsCRMData.svc" + "/X360Configurations(" + "Username=" + $toODataString(Username, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "DynamicsCRMData", type: DynamicsCRMData }
        ])

    });

}(msls.application));
