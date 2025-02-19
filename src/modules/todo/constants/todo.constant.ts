import type { TableColumnData } from "@arco-design/web-vue";

export const todoColumns: TableColumnData[] = [
    {
        title: "Todo",
        dataIndex: "title",
    },
    {
        title: "Completed",
        dataIndex: "completed",
        slotName: "completed",
    },
    {
        title: "Action",
        slotName: "actions",
    },
];
