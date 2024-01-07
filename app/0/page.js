import Header from "@/components/header/header";
import BannerSection from "@/components/bannerSection/bannerSection";
import SignUpForm from "@/components/bannerSection/signUpForm";
import HiddenArrows from "@/components/bannerSection/hiddenArrows";
import FeatureSection from '@/components/featureSection/featureSection';
import FeatureSectionHeader from '@/components/featureSection/featureSectionHeader';
import FeatureRow from '@/components/featureSection/featureRow';
import FeatureRowItems from '@/components/featureSection/featureRowItems';
import FeatureSectionSubtitle from '@/components/featureSection/featureSectionSubtitle';
import IncrementalCounter from '@/components/featureSection/incrementalCounter';
import PeopleSignupText from '@/components/featureSection/peopleSignupText';
import FaceMapImage from '@/components/featureSection/faceMapImage';
import AppDownloadSection from '@/components/appDownloadSection/appDownloadSection';
import AppDownloadSectionHeader from '@/components/appDownloadSection/appDownloadSectionHeader';
import AppButtons from '@/components/appDownloadSection/appButtons';
import AppDownloadSectionSubtitle from '@/components/appDownloadSection/appDownloadSectionSubtitle';
import IphoneImage from '@/components/appDownloadSection/iphoneImage';
import ImageDividerSection from '@/components/imageDeviderSection/imageDividerSection';

export default function Home() {
    return (
        <>
            {/* Header Element Start */}
            <Header />
            {/* Header Element End */}

            {/* Banner Section Start */}
            <BannerSection>
                <SignUpForm />
                <HiddenArrows />
            </BannerSection>
            {/* Banner Section End */}

            {/* Feature Section Start */}
            <FeatureSection>
                <FeatureSectionHeader />
                <FeatureRow>
                    <FeatureRowItems />
                    <FeatureSectionSubtitle />
                    <IncrementalCounter />
                    <PeopleSignupText />
                    <FaceMapImage />
                </FeatureRow>
            </FeatureSection>
            {/* Feature Section End */}

            {/* App Download Section Start */}
            <AppDownloadSection>
                <AppDownloadSectionHeader />
                <AppButtons />
                <AppDownloadSectionSubtitle />
                <IphoneImage />
            </AppDownloadSection>
            {/* App Download Section End */}

            {/* Image Divider Section Start */}
            <ImageDividerSection />
            {/* Image Divider Section End */}

        </>
    )
}