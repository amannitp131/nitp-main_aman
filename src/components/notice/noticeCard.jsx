import {
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Star,
} from "lucide-react";

export const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
    <div className="absolute left-0 top-0 h-full w-2 bg-purple-600 rounded-l-lg"></div>
    <div className="pl-4">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-start gap-2">
            {imp && (
              <Briefcase className="w-5 h-5 text-purple-800 mt-1 flex-shrink-0" />
            )}
            <h3 className="text-gray-800 text-base font-semibold leading-tight">
              {detail}
            </h3>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 my-3"></div>
      <div className="flex flex-wrap items-center justify-start gap-7 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>
            {" "}
            {new Date(time).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        {Array.isArray(attachments) && attachments.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {attachments.map((attachment, index) => (
                <a
                  key={index}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-800 hover:text-purple-900 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{attachment.caption || "Download"}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-800 hover:text-purple-900 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Event</span>
          </a>
        )}
      </div>
    </div>
  </div>
);
