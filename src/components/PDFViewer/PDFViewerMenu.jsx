import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentPageState, totalPagesState } from '../../atoms';

export const PDFViewerMenu = () => {
    const setCurrentPage = useSetRecoilState(currentPageState);
    const totalPages = useRecoilValue(totalPagesState);

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Bookmark</button>
            <button onClick={() => setCurrentPage(1)}>First Page</button>
            <button onClick={() => setCurrentPage(totalPages)}>Last Page</button>
        </div>
    );
};
