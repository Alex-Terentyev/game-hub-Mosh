import { Card, CardBody, Skeleton, SkeletonText, Text } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody />
      <SkeletonText> </SkeletonText>
    </Card>
  );
};

export default GameCardSkeleton;
