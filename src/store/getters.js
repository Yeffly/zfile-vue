import common from "../common";

export default {
    infoEnable: state => {
        return state.config.viewConfig && state.config.viewConfig.infoEnable;
    },
    tableSize: state => {
        return state.config.viewConfig && state.config.viewConfig.tableSize;
    },
    showOperator: state => {
        return state.config.viewConfig && state.config.viewConfig.showOperator;
    },
    showDocument: state => {
        return state.config.viewConfig && state.config.viewConfig.showDocument;
    },
    announcement: state => {
        return state.config.viewConfig && state.config.viewConfig.announcement;
    },
    layout: state => {
        return state.config.viewConfig && state.config.viewConfig.layout;
    },
    showAnnouncement: state => {
        return state.config.viewConfig && state.config.viewConfig.showAnnouncement;
    },
    searchEnable: state => {
        return state.config.viewConfig && state.config.viewConfig.searchEnable;
    },
    tableData: state => {
        let tableData = state.tableData;
        tableData.forEach((item) => {
            if (!item.icon) {
                item['icon'] = common.getFileIconName(item);

                if (item.type !== 'FILE') {
                    let host = window.location.host;
                    item.url = common.removeDuplicateSeparator(host + "/#/main/" + item.path + '/' + item.name);
                }
            }
        });
        return tableData;
    },
    filterFileByType: (state) => (type) => {
        return state.tableData.filter(function (item) {
            if (item.type === 'BACK') {
                return false
            }
            let name = item.name;
            let suffix = name.substr(name.lastIndexOf('.') + 1);
            return common.constant.fileTypeMap[type].indexOf(suffix) !== -1;
        });
    }
}