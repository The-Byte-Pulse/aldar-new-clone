import { useNavigate, useLocation } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-primary, #f5f5f5)",
        padding: "16px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-surface, #ffffff)",
          borderRadius: "20px",
          padding: "48px 40px",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          border: "1px solid var(--border, #e5e7eb)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            backgroundColor: "rgba(108, 92, 231, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px auto",
          }}
        >
          <SearchX size={40} color="var(--primary, #6C5CE7)" />
        </div>

        {/* 404 */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "800",
            color: "var(--primary, #6C5CE7)",
            lineHeight: 1,
            letterSpacing: "-3px",
            marginBottom: "12px",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "var(--text-primary, #1a1a2e)",
            margin: "0 0 10px 0",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "var(--text-secondary, #888)",
            margin: "0 0 16px 0",
            lineHeight: "1.6",
          }}
        >
          Page is not exist.
        </p>

        {/* Path badge */}
        {/* <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(108, 92, 231, 0.08)",
            border: "1px solid rgba(108, 92, 231, 0.2)",
            borderRadius: "8px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "var(--primary, #6C5CE7)",
            fontFamily: "monospace",
            marginBottom: "32px",
            wordBreak: "break-all",
          }}
        >
          { {location.pathname} }
        </div> */}

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--border, #e5e7eb)",
            margin: "0 0 28px 0",
          }}
        />

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "10px",
              border: "1.5px solid var(--primary, #6C5CE7)",
              backgroundColor: "transparent",
              color: "var(--primary, #6C5CE7)",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(108,92,231,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <ArrowLeft size={16} />
            Back to Page
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "var(--primary, #6C5CE7)",
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(108,92,231,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5a4bd1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--primary, #6C5CE7)")
            }
          >
            <Home size={16} />
            Dashboard
          </button>
        </div>

        <p
          style={{
            marginTop: "28px",
            fontSize: "12px",
            color: "var(--text-secondary, #bbb)",
          }}
        >
          Al Dar Exchange Portal
        </p>
      </div>
    </div>
  );
}
