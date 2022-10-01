import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, totalPagesState } from '../../atoms';

export const PDFViewerPagination = () => {
    const [inputValue, setInputValue] = useState(null);
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const totalPages = useRecoilValue(totalPagesState);

    const onInputChange = async (input) => {
        await setInputValue(input);

        let numValue = parseInt(input, 10);

        // Force the number to a min of 1 or max of total page count
        if (numValue <= 0) numValue = 1;
        if (numValue > totalPages) numValue = totalPages;

        // If input is valid, set current page equal to this number
        if (numValue > 0 && numValue <= totalPages) {
            setCurrentPage(numValue);
            setInputValue(null);
        }
    };

    const previousPage = () => {
        // Ignore button if already on page one
        if (currentPage > 1) setCurrentPage((curr) => curr - 1);
    };

    const nextPage = () => {
        // Ignore button if already on page one
        if (currentPage < totalPages) setCurrentPage((curr) => curr + 1);
    };

    return (
        <div className="flex justify-center space-x-4 py-6">
            <button
                className="btn btn-secondary btn-sm px-1"
                onClick={() => previousPage()}
                disabled={currentPage === 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <input
                className="text-input"
                type="number"
                value={inputValue === null ? currentPage : inputValue}
                min={1}
                max={totalPages}
                onChange={(e) => onInputChange(e.target.value)}
            />
            <button
                className="btn btn-secondary btn-sm px-1"
                onClick={() => nextPage()}
                disabled={currentPage === totalPages}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};
