import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function StatsCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <StatsCardSkeleton title={title} value={value} />
  );
}

export const StatsCardSkeleton = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="h-4 w-24 animate-pulse rounded-md bg-muted">
          {title}
        </CardDescription>
        <CardTitle className="h-8 w-24 animate-pulse rounded-md bg-muted">
          {value}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

