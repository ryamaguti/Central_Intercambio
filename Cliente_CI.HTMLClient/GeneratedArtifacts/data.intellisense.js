/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.AccountLead, {
        /// <field>
        /// Called when a new accountLead is created.
        /// <br/>created(msls.application.AccountLead entity)
        /// </field>
        created: [lightSwitchApplication.AccountLead]
    });

    msls._addEntryPoints(lightSwitchApplication.Account, {
        /// <field>
        /// Called when a new account is created.
        /// <br/>created(msls.application.Account entity)
        /// </field>
        created: [lightSwitchApplication.Account]
    });

    msls._addEntryPoints(lightSwitchApplication.Activity, {
        /// <field>
        /// Called when a new activity is created.
        /// <br/>created(msls.application.Activity entity)
        /// </field>
        created: [lightSwitchApplication.Activity]
    });

    msls._addEntryPoints(lightSwitchApplication.ActivityParty, {
        /// <field>
        /// Called when a new activityParty is created.
        /// <br/>created(msls.application.ActivityParty entity)
        /// </field>
        created: [lightSwitchApplication.ActivityParty]
    });

    msls._addEntryPoints(lightSwitchApplication.Attachment, {
        /// <field>
        /// Called when a new attachment is created.
        /// <br/>created(msls.application.Attachment entity)
        /// </field>
        created: [lightSwitchApplication.Attachment]
    });

    msls._addEntryPoints(lightSwitchApplication.CompetitorProduct, {
        /// <field>
        /// Called when a new competitorProduct is created.
        /// <br/>created(msls.application.CompetitorProduct entity)
        /// </field>
        created: [lightSwitchApplication.CompetitorProduct]
    });

    msls._addEntryPoints(lightSwitchApplication.Competitor, {
        /// <field>
        /// Called when a new competitor is created.
        /// <br/>created(msls.application.Competitor entity)
        /// </field>
        created: [lightSwitchApplication.Competitor]
    });

    msls._addEntryPoints(lightSwitchApplication.ContactLead, {
        /// <field>
        /// Called when a new contactLead is created.
        /// <br/>created(msls.application.ContactLead entity)
        /// </field>
        created: [lightSwitchApplication.ContactLead]
    });

    msls._addEntryPoints(lightSwitchApplication.ContactOrder, {
        /// <field>
        /// Called when a new contactOrder is created.
        /// <br/>created(msls.application.ContactOrder entity)
        /// </field>
        created: [lightSwitchApplication.ContactOrder]
    });

    msls._addEntryPoints(lightSwitchApplication.Contact, {
        /// <field>
        /// Called when a new contact is created.
        /// <br/>created(msls.application.Contact entity)
        /// </field>
        created: [lightSwitchApplication.Contact]
    });

    msls._addEntryPoints(lightSwitchApplication.ContractDetail, {
        /// <field>
        /// Called when a new contractDetail is created.
        /// <br/>created(msls.application.ContractDetail entity)
        /// </field>
        created: [lightSwitchApplication.ContractDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.Contract, {
        /// <field>
        /// Called when a new contract is created.
        /// <br/>created(msls.application.Contract entity)
        /// </field>
        created: [lightSwitchApplication.Contract]
    });

    msls._addEntryPoints(lightSwitchApplication.InvoiceDetail, {
        /// <field>
        /// Called when a new invoiceDetail is created.
        /// <br/>created(msls.application.InvoiceDetail entity)
        /// </field>
        created: [lightSwitchApplication.InvoiceDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.Invoice, {
        /// <field>
        /// Called when a new invoice is created.
        /// <br/>created(msls.application.Invoice entity)
        /// </field>
        created: [lightSwitchApplication.Invoice]
    });

    msls._addEntryPoints(lightSwitchApplication.LeadCompetitor, {
        /// <field>
        /// Called when a new leadCompetitor is created.
        /// <br/>created(msls.application.LeadCompetitor entity)
        /// </field>
        created: [lightSwitchApplication.LeadCompetitor]
    });

    msls._addEntryPoints(lightSwitchApplication.LeadProduct, {
        /// <field>
        /// Called when a new leadProduct is created.
        /// <br/>created(msls.application.LeadProduct entity)
        /// </field>
        created: [lightSwitchApplication.LeadProduct]
    });

    msls._addEntryPoints(lightSwitchApplication.Lead, {
        /// <field>
        /// Called when a new lead is created.
        /// <br/>created(msls.application.Lead entity)
        /// </field>
        created: [lightSwitchApplication.Lead]
    });

    msls._addEntryPoints(lightSwitchApplication.Opportunity, {
        /// <field>
        /// Called when a new opportunity is created.
        /// <br/>created(msls.application.Opportunity entity)
        /// </field>
        created: [lightSwitchApplication.Opportunity]
    });

    msls._addEntryPoints(lightSwitchApplication.OpportunityClose, {
        /// <field>
        /// Called when a new opportunityClose is created.
        /// <br/>created(msls.application.OpportunityClose entity)
        /// </field>
        created: [lightSwitchApplication.OpportunityClose]
    });

    msls._addEntryPoints(lightSwitchApplication.OpportunityCompetitor, {
        /// <field>
        /// Called when a new opportunityCompetitor is created.
        /// <br/>created(msls.application.OpportunityCompetitor entity)
        /// </field>
        created: [lightSwitchApplication.OpportunityCompetitor]
    });

    msls._addEntryPoints(lightSwitchApplication.OpportunityProduct, {
        /// <field>
        /// Called when a new opportunityProduct is created.
        /// <br/>created(msls.application.OpportunityProduct entity)
        /// </field>
        created: [lightSwitchApplication.OpportunityProduct]
    });

    msls._addEntryPoints(lightSwitchApplication.PriceLevel, {
        /// <field>
        /// Called when a new priceLevel is created.
        /// <br/>created(msls.application.PriceLevel entity)
        /// </field>
        created: [lightSwitchApplication.PriceLevel]
    });

    msls._addEntryPoints(lightSwitchApplication.Product, {
        /// <field>
        /// Called when a new product is created.
        /// <br/>created(msls.application.Product entity)
        /// </field>
        created: [lightSwitchApplication.Product]
    });

    msls._addEntryPoints(lightSwitchApplication.Queue, {
        /// <field>
        /// Called when a new queue is created.
        /// <br/>created(msls.application.Queue entity)
        /// </field>
        created: [lightSwitchApplication.Queue]
    });

    msls._addEntryPoints(lightSwitchApplication.QuoteClose, {
        /// <field>
        /// Called when a new quoteClose is created.
        /// <br/>created(msls.application.QuoteClose entity)
        /// </field>
        created: [lightSwitchApplication.QuoteClose]
    });

    msls._addEntryPoints(lightSwitchApplication.QuoteDetail, {
        /// <field>
        /// Called when a new quoteDetail is created.
        /// <br/>created(msls.application.QuoteDetail entity)
        /// </field>
        created: [lightSwitchApplication.QuoteDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.Quote, {
        /// <field>
        /// Called when a new quote is created.
        /// <br/>created(msls.application.Quote entity)
        /// </field>
        created: [lightSwitchApplication.Quote]
    });

    msls._addEntryPoints(lightSwitchApplication.Role, {
        /// <field>
        /// Called when a new role is created.
        /// <br/>created(msls.application.Role entity)
        /// </field>
        created: [lightSwitchApplication.Role]
    });

    msls._addEntryPoints(lightSwitchApplication.SalesOrderDetail, {
        /// <field>
        /// Called when a new salesOrderDetail is created.
        /// <br/>created(msls.application.SalesOrderDetail entity)
        /// </field>
        created: [lightSwitchApplication.SalesOrderDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.SalesOrder, {
        /// <field>
        /// Called when a new salesOrder is created.
        /// <br/>created(msls.application.SalesOrder entity)
        /// </field>
        created: [lightSwitchApplication.SalesOrder]
    });

    msls._addEntryPoints(lightSwitchApplication.SdkMessagePair, {
        /// <field>
        /// Called when a new sdkMessagePair is created.
        /// <br/>created(msls.application.SdkMessagePair entity)
        /// </field>
        created: [lightSwitchApplication.SdkMessagePair]
    });

    msls._addEntryPoints(lightSwitchApplication.SdkMessageRequest, {
        /// <field>
        /// Called when a new sdkMessageRequest is created.
        /// <br/>created(msls.application.SdkMessageRequest entity)
        /// </field>
        created: [lightSwitchApplication.SdkMessageRequest]
    });

    msls._addEntryPoints(lightSwitchApplication.SdkMessageResponse, {
        /// <field>
        /// Called when a new sdkMessageResponse is created.
        /// <br/>created(msls.application.SdkMessageResponse entity)
        /// </field>
        created: [lightSwitchApplication.SdkMessageResponse]
    });

    msls._addEntryPoints(lightSwitchApplication.SdkMessage, {
        /// <field>
        /// Called when a new sdkMessage is created.
        /// <br/>created(msls.application.SdkMessage entity)
        /// </field>
        created: [lightSwitchApplication.SdkMessage]
    });

    msls._addEntryPoints(lightSwitchApplication.Solution, {
        /// <field>
        /// Called when a new solution is created.
        /// <br/>created(msls.application.Solution entity)
        /// </field>
        created: [lightSwitchApplication.Solution]
    });

    msls._addEntryPoints(lightSwitchApplication.TeamRole, {
        /// <field>
        /// Called when a new teamRole is created.
        /// <br/>created(msls.application.TeamRole entity)
        /// </field>
        created: [lightSwitchApplication.TeamRole]
    });

    msls._addEntryPoints(lightSwitchApplication.Team, {
        /// <field>
        /// Called when a new team is created.
        /// <br/>created(msls.application.Team entity)
        /// </field>
        created: [lightSwitchApplication.Team]
    });

    msls._addEntryPoints(lightSwitchApplication.Territory, {
        /// <field>
        /// Called when a new territory is created.
        /// <br/>created(msls.application.Territory entity)
        /// </field>
        created: [lightSwitchApplication.Territory]
    });

    msls._addEntryPoints(lightSwitchApplication.UoM, {
        /// <field>
        /// Called when a new uoM is created.
        /// <br/>created(msls.application.UoM entity)
        /// </field>
        created: [lightSwitchApplication.UoM]
    });

    msls._addEntryPoints(lightSwitchApplication.UoMSchedule, {
        /// <field>
        /// Called when a new uoMSchedule is created.
        /// <br/>created(msls.application.UoMSchedule entity)
        /// </field>
        created: [lightSwitchApplication.UoMSchedule]
    });

    msls._addEntryPoints(lightSwitchApplication.WorkflowDependency, {
        /// <field>
        /// Called when a new workflowDependency is created.
        /// <br/>created(msls.application.WorkflowDependency entity)
        /// </field>
        created: [lightSwitchApplication.WorkflowDependency]
    });

    msls._addEntryPoints(lightSwitchApplication.WorkflowLog, {
        /// <field>
        /// Called when a new workflowLog is created.
        /// <br/>created(msls.application.WorkflowLog entity)
        /// </field>
        created: [lightSwitchApplication.WorkflowLog]
    });

    msls._addEntryPoints(lightSwitchApplication.Workflow, {
        /// <field>
        /// Called when a new workflow is created.
        /// <br/>created(msls.application.Workflow entity)
        /// </field>
        created: [lightSwitchApplication.Workflow]
    });

    msls._addEntryPoints(lightSwitchApplication.X360Configuration, {
        /// <field>
        /// Called when a new x360Configuration is created.
        /// <br/>created(msls.application.X360Configuration entity)
        /// </field>
        created: [lightSwitchApplication.X360Configuration]
    });

}(msls.application));
