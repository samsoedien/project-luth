
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 20 Mar 2024 13:15:23 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
TokenColorBaseWhite,
TokenColorBaseRed,
TokenColorBaseGreen,
TokenColorBaseSuccess
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
