import clsx from "clsx";
import styles from "./ButtonAccount.module.scss";
export default function Button({
  icon,
  label,
  bgColor,
  color,
  type = "button",
  disabled,
  onClick,
  className,
}: {
  icon?: React.ReactNode;
  label: string;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(styles.btnWrapper, className)}
      style={{ backgroundColor: bgColor, color: color }}
      onClick={() => onClick && onClick()}
    >
      <div className={styles.btnInner}>
        <div className={styles.btnIcon}>{icon}</div>
        <div>{label}</div>
      </div>
    </button>
  );
}
