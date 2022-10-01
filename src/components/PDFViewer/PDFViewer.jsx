import { useRecoilValue, useSetRecoilState } from 'recoil';
import { totalPagesState, currentPageState } from '../../atoms';
import { PDFViewerPagination } from './PDFViewerPagination';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { PDFViewerMenu } from './PDFViewerMenu';

export const PDFViewer = () => {
    const setNumPages = useSetRecoilState(totalPagesState);
    const currentPage = useRecoilValue(currentPageState);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    // if (ref.current !== null) console.log(ref.current.pages[0].clientHeight);

    return (
        <div className="min-h-screen flex flex-col">
            <PDFViewerMenu />
            <Document
                file={process.env.PUBLIC_URL + '/test.pdf'}
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex justify-center flex-1"
            >
                <Page pageNumber={currentPage} />
            </Document>
            <PDFViewerPagination />
        </div>
    );
};
