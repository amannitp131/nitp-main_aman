export const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
      <svg
        version="1.1"
        id="L1"
        height="80px"
        width="80px"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
      >
        <circle
          fill="none"
          stroke="#f87171"
          strokeWidth="6"
          strokeMiterlimit="15"
          strokeDasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
  