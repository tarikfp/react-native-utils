export interface INativeAlertProps {
  readonly title?: string;
  readonly content: string;
  readonly buttonOneText: string;
  readonly buttonTwoText?: string;
  readonly onPressButtonOne?: () => void;
  readonly onPressButtonTwo?: () => void;
}
