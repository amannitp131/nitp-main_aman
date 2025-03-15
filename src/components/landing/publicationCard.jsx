export const PublicationCard = ({
  year,
  authors,
  journalName,
  title,
  journalQuartile,
  volume,
}) => {
  return (
    <div className="p-4 border border-gray-300 bg-white rounded-md shadow-sm">
      {title && (
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
          "{title}"
        </h3>
      )}
      {authors && (
        <p className="text-xs text-gray-700 mt-1">
          <strong>Authors:</strong> {authors}
        </p>
      )}
      <p className="text-xs text-gray-600 mt-1">
        {journalName && <span className="font-medium text-gray-800">{journalName}</span>}
        {journalQuartile && <span> ({journalQuartile})</span>}
      </p>
      <p className="text-xs text-gray-600 mt-1">
        {volume && <span><strong>Volume:</strong> {volume} | </span>}
        {year && <span><strong>Year:</strong> {year}</span>}
      </p>
    </div>
  );
};
