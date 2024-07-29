import { Share } from 'react-native'

const share = async (url) => {
    try {
        const result = await Share.share({
            message: `Read this article: ${url}`,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                //  console.log(result.action);
            } else {
                //  console.log(result.action);
            }
        } else if (result.action === Share.dismissedAction) {
            //   console.log(result.action);
        }
    } catch (error) {
        alert(error.message);
    }
}

export default share