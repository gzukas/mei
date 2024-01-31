import { useAtom, useAtomValue } from 'jotai';
import { ArrowDownUp, ArrowUpDown } from 'lucide-react';
import { Trans } from '@lingui/macro';
import { areImagesReversedAtom } from '@/atoms/areImagesReversedAtom';
import { imageCountAtom } from '@/atoms/imagesAtom';
import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/Tooltip';

export function ReverseImages() {
  const [areImagesReversed, toggleImagesReversed] = useAtom(
    areImagesReversedAtom
  );
  const imageCount = useAtomValue(imageCountAtom);
  const Icon = areImagesReversed ? ArrowDownUp : ArrowUpDown;

  const handleClick = () => {
    toggleImagesReversed();
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={handleClick}
          disabled={imageCount < 2}
        >
          <Icon className="w-4 h-4" />
          <span className="sr-only">
            <Trans>Reverse images</Trans>
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Trans>Reverse images</Trans>
      </TooltipContent>
    </Tooltip>
  );
}
