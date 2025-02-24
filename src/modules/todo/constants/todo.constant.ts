import type { TableColumnData } from "@arco-design/web-vue";

export const todoColumns: TableColumnData[] = [
    {
        title: "Todo",
        dataIndex: "title",
        slotName: "title",
    },
    {
        title: "Completed",
        dataIndex: "completed",
        slotName: "completed",
    },
    {
        title: "Actions",
        slotName: "actions",
        align: "center",
        headerCellStyle: {
            fontWeight: "bold",
            verticalAlign: "middle",
        },
        cellStyle: {
            textAlign: "center",
            verticalAlign: "middle",
        },
    },
];
