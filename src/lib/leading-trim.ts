import type { IFontMetrics } from "../types";

export interface LeadingTrimParams {
  metrics: IFontMetrics;
  baseline: number;
  fontSize: number;
  leading: number;
  alignToGrid?: boolean;
}

export interface LeadingTrimMetrics {
  fontSize: number;
  lineHeight: number;
  paddingTop: number;
  paddingBottom: number;
  trimTop: number;
  trimBottom: number;
}

export const leadingTrim = ({
  metrics,
  baseline,
  fontSize,
  leading = 0,
  alignToGrid = true,
}: LeadingTrimParams): LeadingTrimMetrics => {
  // ratios
  const preventCollapse = 0.1;
  const descentAbs = Math.abs(metrics.descent);
  const capHeightRatio = metrics.capHeight / metrics.unitsPerEm;
  const ascentRatio = (metrics.ascent - metrics.capHeight) / metrics.unitsPerEm;
  const descentRatio = descentAbs / metrics.unitsPerEm;

  // bounding box
  const boundingBox = metrics.ascent + descentAbs + metrics.lineGap;
  const boundingBoxHeight = (boundingBox / metrics.unitsPerEm) * fontSize;

  // type height
  const capSize = capHeightRatio * fontSize;
  const baselineRows = capSize / baseline;
  const typeRows = Math.ceil(baselineRows);
  const typeHeight = alignToGrid ? typeRows * baseline : capSize;

  // leading
  const leadingValue = alignToGrid ? Math.round(leading) : leading;
  const minLeading = alignToGrid ? typeRows : typeHeight;
  const typeLeading =
    leading < 0 ? Math.max(leadingValue, minLeading * -1) : leadingValue;

  // line height
  const typeLineGap = typeLeading * baseline;
  const typeLineHeight = typeHeight + typeLineGap;

  // leading trim
  const lineGapHeight = (metrics.lineGap / metrics.unitsPerEm) * fontSize;
  const lineHeightOffset =
    (boundingBoxHeight - typeLineHeight - lineGapHeight) / 2;

  const trimTop = ascentRatio * fontSize - lineHeightOffset;
  const trimBottom = descentRatio * fontSize - lineHeightOffset;

  // align to baseline
  const paddingTop = alignToGrid ? preventCollapse : preventCollapse;

  const trimTopSize = trimTop * -1 - preventCollapse;
  const trimBottomSize = trimBottom * -1 - preventCollapse;

  console.log(typeLineHeight, trimTopSize, trimBottomSize);

  return {
    fontSize: fontSize,
    lineHeight: typeLineHeight,
    paddingTop: paddingTop,
    paddingBottom: preventCollapse,
    trimTop: trimTopSize,
    trimBottom: trimBottomSize,
  };
};
