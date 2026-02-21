import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Premium Generic Table Component
 * Custom Div-based Flex implementation with specific 5px radius
 * and a refined dark blue professional shade.
 */
const Table = ({
    rowData = [],
    columnDefs = [],
    className = "",
    paginationPageSize = 10,
    ...props
}) => {
    return (
        <div className={twMerge("w-full overflow-hidden flex flex-col h-full bg-[#0F172A] border border-blue-900/40 shadow-xl", className)} style={{ borderRadius: '5px' }}>
            {/* Header */}
            <div className="bg-[#1E293B] border-b border-blue-500/20 z-20 flex">
                {columnDefs.map((col, index) => {
                    const style = {
                        width: col.width,
                        minWidth: col.minWidth,
                        flex: col.flex ? `${col.flex} 0 0px` : 'none'
                    };
                    if (!col.width && !col.minWidth && !col.flex) {
                        style.flex = '1 0 0px';
                    }
                    return (
                        <div
                            key={index}
                            style={style}
                            className="px-6 py-4 text-[11px] font-bold text-blue-300 uppercase tracking-wider whitespace-nowrap"
                        >
                            {col.headerName}
                        </div>
                    );
                })}
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
                {rowData.length > 0 ? (
                    rowData.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="group hover:bg-blue-900/20 transition-all duration-200 flex border-b border-blue-900/10 last:border-0"
                        >
                            {columnDefs.map((col, colIndex) => {
                                const value = col.field ? row[col.field] : null;
                                const params = {
                                    value,
                                    data: row,
                                    rowIndex
                                };

                                const style = {
                                    width: col.width,
                                    minWidth: col.minWidth,
                                    flex: col.flex ? `${col.flex} 0 0px` : 'none'
                                };
                                if (!col.width && !col.minWidth && !col.flex) {
                                    style.flex = '1 0 0px';
                                }

                                return (
                                    <div
                                        key={colIndex}
                                        style={style}
                                        className="px-6 py-5 text-[13px] text-white flex items-center transition-colors group-hover:text-white"
                                    >
                                        {col.cellRenderer ? col.cellRenderer(params) : (
                                            <span className="opacity-90 group-hover:opacity-100 truncate">
                                                {value}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))
                ) : (
                    <div className="w-full py-24 text-center flex flex-col items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-500/5 flex items-center justify-center border border-blue-500/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                        <span className="text-blue-400/40 font-bold text-[10px] uppercase tracking-widest">
                            No data synchronized
                        </span>
                    </div>
                )}
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-blue-900/20 bg-[#0F172A] flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest z-10">
                <div className="flex items-center gap-3">
                    <span className="tracking-widest hidden sm:inline opacity-60">
                        TOTAL RECORDS: <span className="text-blue-400">{rowData.length}</span>
                    </span>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="hover:text-blue-400 transition-all disabled:opacity-20 cursor-pointer" disabled>
                        PREVIOUS
                    </button>
                    <button className="hover:text-blue-400 transition-all disabled:opacity-20 cursor-pointer" disabled>
                        NEXT
                    </button>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1E293B;
                    border-radius: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #3B82F6;
                }
            `}</style>
        </div>
    );
};

export default Table;
