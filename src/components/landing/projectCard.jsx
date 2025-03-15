function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export const ProjectCard = ({
  project_title,
  facultyName,
  sponsor,
  amount,
  start,
  end,
}) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-md shadow-sm">
      {project_title && (
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
          {project_title}
        </h3>
      )}

      <div className="mt-2 text-xs text-gray-700 space-y-1">
        {facultyName && (
          <p>
            <strong className="text-gray-800">Faculty:</strong> {facultyName}
          </p>
        )}
        {sponsor && (
          <p>
            <strong className="text-gray-800">Sponsor:</strong> {sponsor}
          </p>
        )}
        {amount && (
          <p>
            <strong className="text-gray-800">Amount:</strong> {amount}
          </p>
        )}
        {start && end && (
         <p>
         <strong className="text-gray-800">Duration:</strong> {formatDate(start)} - {formatDate(end)}
       </p>       
        )}
      </div>
    </div>
  );
};
