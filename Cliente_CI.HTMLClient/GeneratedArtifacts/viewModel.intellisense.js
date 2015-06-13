/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ScreenContent"); }]
    });

    lightSwitchApplication.ListContacts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ListContacts
        },
        ContactList: {
            _$class: msls.ContentItem,
            _$name: "ContactList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ListContacts,
            data: lightSwitchApplication.ListContacts,
            value: lightSwitchApplication.ListContacts
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ListContacts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ListContacts, {
        /// <field>
        /// Called when a new ListContacts screen is created.
        /// <br/>created(msls.application.ListContacts screen)
        /// </field>
        created: [lightSwitchApplication.ListContacts],
        /// <field>
        /// Called before changes on an active ListContacts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ListContacts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ListContacts],
        /// <field>
        /// Called after the ContactList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactList_postRender: [$element, function () { return new lightSwitchApplication.ListContacts().findContentItem("ContactList"); }]
    });

    lightSwitchApplication.Reports.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Reports
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Reports,
            data: lightSwitchApplication.Reports,
            value: lightSwitchApplication.Reports
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Reports,
            data: lightSwitchApplication.Reports,
            value: lightSwitchApplication.Reports
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Reports
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Reports, {
        /// <field>
        /// Called when a new Reports screen is created.
        /// <br/>created(msls.application.Reports screen)
        /// </field>
        created: [lightSwitchApplication.Reports],
        /// <field>
        /// Called before changes on an active Reports screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Reports screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Reports],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("ScreenContent"); }]
    });

}(msls.application));