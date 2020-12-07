interface GeneralProps {
  'data-testid'?: string;
  size?: string;
  monthlyAmountLength?: number;
}
export interface MonthlyAmountProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    GeneralProps {}

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    GeneralProps {}

export interface TopWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    GeneralProps {}
