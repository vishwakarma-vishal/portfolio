// ReadmeModal.jsx
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { RxCross1 } from "react-icons/rx";
import "github-markdown-css/github-markdown.css";

export default function ReadmeModal({ readme, meta = {}, onClose }) {
    useEffect(() => {
        function onKey(e) { if (e.key === 'Escape') onClose(); }
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    function onOverlayClick(e) { if (e.target === e.currentTarget) onClose(); }

    return (
        <div className="modal__overlay" role="dialog" aria-modal="true" aria-label="Project README" onClick={onOverlayClick}>
            <div
                className="modal__panel"
                role="document"
                aria-live="polite"
            >
                <header className="modal__header">
                    <div>
                        <strong className="modal__title">Project README</strong>
                    </div>

                    <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                        {/* optional: a modal-only toggle if you still want it; can be removed */}
                        <button
                            type="button"
                            className="modal__close"
                            onClick={onClose}
                            aria-label="Close README"
                        >
                            <RxCross1 className="modal__close-icon" />
                        </button>
                    </div>
                </header>

                <div className="modal__body">
                    {meta.loading && <div className="modal__status">Fetching README…</div>}

                    {meta.error && (
                        <div className="modal__error-block">
                            <p>{meta.error}</p>
                            {meta.error.includes('https://github.com') && (
                                <p><a href={meta.error.split(' ').pop()} target="_blank" rel="noopener noreferrer">Open repo on GitHub</a></p>
                            )}
                        </div>
                    )}

                    {!meta.loading && !meta.error && (
                        <div className="markdown-container">
                            <article className="markdown-body">
                                <ReactMarkdown
                                    children={readme || "No README available."}
                                    remarkPlugins={[remarkGfm, remarkEmoji]}
                                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                />
                            </article>
                        </div>
                    )}
                </div>

                <footer className="modal__footer">
                    <button className="button modal_button" onClick={onClose} aria-label="Close">Close</button>
                </footer>
            </div>
        </div>
    );
}
